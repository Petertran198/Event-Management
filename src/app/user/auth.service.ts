import { Injectable } from '@angular/core';
import { IUser } from './user.model';
@Injectable()
export class AuthService {
  currentUser: IUser;

  isAuthenticated() {
    return !!this.currentUser; // turns into boolean
  }
  login(username: string, password: string) {
    this.currentUser = {
      firstName: 'Bob',
      lastName: 'T',
      id: 99,
      userName: username,
    };
  }
}
