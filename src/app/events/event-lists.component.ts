import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../common/toastr.service';
import { EventService } from './shared/event.service';

@Component({
  selector: 'event-list',
  templateUrl: './event-lists.component.html',
})
export class EventListsComponent implements OnInit {
  events = [];

  //Short hand to initalize and inject our services
  //Get event data and inject a third party library.
  constructor(
    private eventService: EventService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName: string) {
    this.toastrService.success(eventName);
  }
}
