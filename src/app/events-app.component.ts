import { Component } from '@angular/core';

@Component({
  selector: 'event-app-root',
  template: ` <navbar></navbar>
    <event-list></event-list>`,
})
export class EventAppComponent {
  title = 'Event Management';
}
