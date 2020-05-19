import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './nav/menu/menu.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './authorized/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProvideServiceComponent } from './authorized/provide-service/provide-service.component';
import { NeedServiceComponent } from './authorized/need-service/need-service.component';
import { HomeLandingComponent } from './authorized/home-landing/home-landing.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProvideServiceComponent,
    NeedServiceComponent,
    HomeLandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // MAT
    MatFormFieldModule,
    MatInputModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
