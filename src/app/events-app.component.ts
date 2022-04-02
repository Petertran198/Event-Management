import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'event-app-root',
  template: `
    <navbar></navbar>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class EventAppComponent implements OnInit {
  constructor(private authService: AuthService, private route: Router) {}
  ngOnInit(): void {
    //Since this is the main component, once this component gets initalized it will run the checkAuthenticatedStatus method giving us a currentUser, allowing us to have persistant login.
    this.authService.checkAuthenticatedStatus();
  }
}
