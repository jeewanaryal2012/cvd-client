import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
//import { UserProfileService } from '../../_services/user-profile.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any;
  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(private authenticationService: AuthenticationService/*, private userProfileService: UserProfileService*/) { }

  ngOnInit(): void {
    //let email = this.authenticationService.currentUserValue.email;
    // this.userProfileService.getUserProfile(email).subscribe(res => {
    //   this.user = res;
    // }, err => { });
    console.log(this.authenticationService.currentUserValue);
    this.user = this.authenticationService.currentUserValue;
  }

}
