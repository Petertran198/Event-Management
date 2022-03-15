import { Component } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  selector: 'login',
})
export class LoginComponent {
  userName: string;
  password: string;

  login(form) {
    console.log(form);
  }
}
