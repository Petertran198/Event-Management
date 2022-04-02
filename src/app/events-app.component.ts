import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService, IEvent } from './events/shared';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'event-app-root',
  template: `
    <navbar [events]="allEvents"></navbar>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class EventAppComponent implements OnInit {
  allEvents: IEvent[];
  constructor(
    private authService: AuthService,
    private route: Router,
    private eventService: EventService
  ) {}
  ngOnInit(): void {
    //Since this is the main component, once this component gets initalized it will run the checkAuthenticatedStatus method giving us a currentUser, allowing us to have persistant login.
    this.authService.checkAuthenticatedStatus();
    this.eventService.getEvents().subscribe((events) => {
      this.allEvents = events;
    });
  }
}
