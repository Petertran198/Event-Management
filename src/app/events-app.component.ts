import { Component } from '@angular/core';

@Component({
  selector: 'event-app-root',
  template: `
    <navbar></navbar>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class EventAppComponent {
  title = 'Event Management';
}
