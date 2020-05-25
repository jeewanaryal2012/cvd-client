import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-register-landing',
  templateUrl: './login-register-landing.component.html',
  styleUrls: ['./login-register-landing.component.scss']
})
export class LoginRegisterLandingComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor() { }

  ngOnInit(): void {
  }

}
