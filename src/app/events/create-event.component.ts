import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared';

@Component({
  templateUrl: './create-event.component.html',
})
export class CreateEventComponent {
  newEvent;

  isDirtyState: boolean = true;

  constructor(private router: Router, private eventService: EventService) {}

  saveEvent(formValue) {
    formValue.date = new Date(formValue.date);
    if (!formValue.date) {
      formValue.date = Date.now();
    }
    this.eventService.saveEvent(formValue);
    this.isDirtyState = false;
    this.router.navigate(['./events']);
  }

  cancel() {
    this.router.navigate(['/events/']);
  }
}
