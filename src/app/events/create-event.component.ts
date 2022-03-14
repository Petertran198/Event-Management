import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './create-event.component.html',
})
export class CreateEventComponent {
  isDirtyState: boolean = true;

  constructor(private router: Router) {}

  onCancel() {
    this.router.navigate(['/events/']);
  }
}
