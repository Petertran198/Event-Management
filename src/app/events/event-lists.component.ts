import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  selector: 'event-list',
  templateUrl: './event-lists.component.html',
})
export class EventListsComponent implements OnInit {
  events = [];
  //Short hand to initalize and inject our service to get event data
  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }
}
