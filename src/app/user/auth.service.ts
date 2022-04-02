import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IUser } from './user.model';
@Injectable()
export class AuthService {
  currentUser: IUser;
  constructor(private http: HttpClient) {}
  isAuthenticated() {
    return !!this.currentUser; // turns into boolean
  }
  login(userName: string, password: string): Observable<boolean | object> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    // tap allows us to implement side effects without having to use subscribe this will let us perform methods that after it runs will also have a 'side effect'
    return this.http
      .post('/api/login', { username: userName, password: password }, options)
      .pipe(
        tap((data) => {
          this.currentUser = <IUser>data['user'];
        })
      )
      .pipe(
        catchError((err) => {
          return of(false);
        })
      );
  }

  editProfile(firstName, lastName) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
