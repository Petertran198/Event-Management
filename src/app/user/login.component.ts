import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
@Component({
  templateUrl: './login.component.html',
  selector: 'login',
  styles: [
    `
      em {
        float: right;
        color: red;
      }
    `,
  ],
})
export class LoginComponent {
  userName: string;
  password: string;
  constructor(private authService: AuthService, private router: Router) {}

  login(form) {
    console.log(form.controls);
  }
}
