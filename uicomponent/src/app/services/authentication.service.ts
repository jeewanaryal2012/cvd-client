import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from '../constants/enpoints';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
//import { Endpoints } from '../constants/enpoints';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('jwt')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }
  public setCurrentUserValue(user) {
    this.currentUserSubject.next(user);
  }

  login(email: string, password: string) {
    return this.http.post<any>(Endpoints.endpoints.login, { email, password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.accessToken) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          // localStorage.setItem('currentUser', JSON.stringify(user));
          // this.currentUserSubject.next(user);
          localStorage.setItem('jwt', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('jwt');
    this.currentUserSubject.next(null);
  }

  register(user) {
    return this.http.post<any>(Endpoints.endpoints.register, user);
  }
}
