import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './authorized/home/home.component';

// Children of Home
import { HomeLandingComponent } from './authorized/home-landing/home-landing.component';
import { ProvideServiceComponent } from './authorized/provide-service/provide-service.component';
import { NeedServiceComponent } from './authorized/need-service/need-service.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuardService] },
  {
    path: 'home', component: HomeComponent, children: [
      { path: '', component: HomeLandingComponent },
      { path: 'provide-service', component: ProvideServiceComponent },
      { path: 'need-service', component: NeedServiceComponent }
    ], canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
