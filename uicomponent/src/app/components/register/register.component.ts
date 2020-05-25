import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../services/authentication.service';

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
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
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
    });

    this.registerForm.patchValue({
      verifyNumber1: Math.floor(Math.random() * 10),
      verifyNumber2: Math.floor(Math.random() * 10)
    });


    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() { return this.registerForm.controls; }

  onSubmit(e) {
    e.preventDefault();
    const isVerified = this.verifyResult(this.registerForm.getRawValue());
    console.log(isVerified);
    // this.authenticationService.register(this.registerForm.value).subscribe(res => {
    //   console.log(res);
    // }, err => { });
  }

  verifyResult(rawValue) {
    const calculatedSum = rawValue.verifyNumber1 + rawValue.verifyNumber2;
    const fieldSum = parseInt(rawValue.verifyResult, 10);
    return calculatedSum === fieldSum;
  }
}
