import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'event-detail',
  templateUrl: './event-details.component.html',
  styles: [
    `
      .event-image {
        height: 100px;
      }
    `,
  ],
})
export class EventDetailComponent implements OnInit {
  event;
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((parms) => {
      const id = Number(parms.get('id'));
      this.event = this.eventService.getEvent(id);
    });
  }
}
