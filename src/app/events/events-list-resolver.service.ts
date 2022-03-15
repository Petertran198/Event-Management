import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service';
import { map } from 'rxjs/operators';
@Injectable()
export class EventsListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {}

  //.getEvents return an observable but because this is in a resolve. we cant .subscribe as it is the resolvr job
  // we have to return the obserable to angular so angular can than watch the observable
  //and see when it finishes. .map will map thorugh everything after it is resolved simulating .subscribe
  resolve() {
    return this.eventService.getEvents().pipe(map((events) => events));
  }
}
