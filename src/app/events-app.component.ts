import { Component } from '@angular/core';

@Component({
  selector: 'event-app-root',
  template: '<event-list></event-list>',
})
export class EventAppComponent {
  title = 'Event Management';
}
