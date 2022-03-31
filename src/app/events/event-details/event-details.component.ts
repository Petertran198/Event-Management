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
    //This way will 'listen/subscribe' to see if there are changes to the id param in url and act accordingly
    this.route.data.forEach((data) => {
      this.event = data['eventResolvedKey'];
      this.isAddingMode = false;
    });

    //Another way to add routes to url
    //Does NOT listen to the url and change once url is change but we are still in same component
    // this.event = this.eventService.getEvent(
    //   Number(this.route.snapshot.params['id'])
    // );
  }

  toggleAddMode() {
    this.isAddingMode = !this.isAddingMode;
  }

  handleSaveSession(session) {
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe();
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
