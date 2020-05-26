import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../services/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  registerSuccess = true;
  verified = false;
  registrationMessage = {
    result: false,
    message: ''
  };
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private snackBar: MatSnackBar
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
      verifyNumber1: [{ value: '', disabled: true }],
      verifyNumber2: [{ value: '', disabled: true }],
      verifyResult: ['']
    }, {
      validator: this.mustMatch('password', 'repeatPassword')
    });

    this.registerForm.patchValue({
      verifyNumber1: Math.floor(Math.random() * 10),
      verifyNumber2: Math.floor(Math.random() * 10)
    });


    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.onValueChanges();
  }
  get f() { return this.registerForm.controls; }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  onValueChanges(): void {
    this.registerForm.valueChanges.subscribe(val => {
      console.log(val, this.registerForm.valid);
    })
  }

  onSubmit(e) {
    this.submitted = true;
    e.preventDefault();
    const isVerified = this.verifyResult(this.registerForm.getRawValue());
    console.log(isVerified);
    if (isVerified === true && this.registerForm.valid) {
      this.verified = true;
      this.authenticationService.register(this.registerForm.value).subscribe(res => {
        console.log(res);
        this.registrationMessage = res[0];
        this.openSnackBar(`${res[0].message}`, `OK`);
        if (res[0].result === true) {
          this.registerForm.reset();
        }
      }, err => { });
    } else {

    }
    // this.authenticationService.register(this.registerForm.value).subscribe(res => {
    //   console.log(res);
    // }, err => { });
  }

  verifyResult(rawValue) {
    const calculatedSum = rawValue.verifyNumber1 + rawValue.verifyNumber2;
    const fieldSum = parseInt(rawValue.verifyResult, 10);
    return calculatedSum === fieldSum;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
