import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUserSubject: BehaviorSubject<any>;
  currentUser: any;
  token: string | null;

  gettoken() {
      return true
  }
  
  logout() {
    // remove user from local storage to log user out
    console.log("In logout")
    localStorage.removeItem('currentUser');
    return true;
  }
  currentUserValue: any;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>((localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
    this.token = localStorage.getItem('currentUser')
  }

  register(registerData:User) {
    return this.http.post<any>(`${environment.register}`, registerData)
    .pipe(map(response => {
      console.log(response);
      return response;
    }));
  }
}
