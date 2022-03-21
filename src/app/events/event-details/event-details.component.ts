import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'event-detail',
  templateUrl: './event-details.component.html',
  styles: [
    `
      .event-image {
        height: 100px;
      }
      .active {
        background-color: DimGray;
      }
    `,
  ],
})
export class EventDetailComponent implements OnInit {
  event;
  isAddingMode: boolean = false;
  filteredBy: string = 'all';
  sortedBy: string = 'Name';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Two ways to get routes from url

    this.route.paramMap.subscribe((parms) => {
      const id = Number(parms.get('id'));
      this.event = this.eventService.getEvent(id);
    });
    //Another way to add routes to url
    // this.event = this.eventService.getEvent(
    //   Number(this.route.snapshot.params['id'])
    // );
  }

  toggleAddMode() {
    this.isAddingMode = !this.isAddingMode;
  }

  handleSaveSession(session) {
    this.eventService.saveSession(this.event, session);
    this.isAddingMode = false;
  }

  handleCancelSession() {
    this.isAddingMode = false;
  }

  setActive(str) {
    this.filteredBy = str;
  }

  setSortedBy(str) {
    this.sortedBy = str;
  }
}
