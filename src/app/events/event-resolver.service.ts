import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { EventService } from './shared';

@Injectable()
export class EventResolver implements Resolve<any> {
  constructor(private eventService: EventService) {}
  //.getEvent return an observable but because this is in a resolve it already performs the .subscribe for us
  resolve(route: ActivatedRouteSnapshot) {
    const id = route.params['id'];
    return this.eventService.getEvent(id);
  }
}
