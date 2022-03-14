import { Component } from '@angular/core';

@Component({
  selector: 'event-app-root',
  template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
  `,
})
export class EventAppComponent {
  title = 'Event Management';
}
