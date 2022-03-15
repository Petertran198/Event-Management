import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '../common/toastr.service';

@Component({
  selector: 'event-list',
  template: `
    <h1>Upcoming Angular Events</h1>
    <hr />
    <div class="row">
      <div class="col-md-5" *ngFor="let event of events">
        <event-thumbnail
          (click)="handleThumbnailClick(event.name)"
          [event]="event"
        ></event-thumbnail>
      </div>
    </div>
  `,
})
export class EventListsComponent implements OnInit {
  events;

  //Short hand to initalize and inject our services
  //Get event data and inject a third party library.
  constructor(
    private toastrService: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // This waits until we get the event data preloaded in before displaying events
    this.events = this.route.snapshot.data['eventsResolvedKey'];
  }

  handleThumbnailClick(eventName: string) {
    this.toastrService.success(eventName);
  }
}
