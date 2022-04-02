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
  isRejectedLogin: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}

  login(form) {
    this.authService.login(form.userName, form.password).subscribe((data) => {
      if (!!data) {
        this.router.navigate(['/events']);
        this.isRejectedLogin = false;
      } else {
        this.isRejectedLogin = true;
      }
    });
  }
}
