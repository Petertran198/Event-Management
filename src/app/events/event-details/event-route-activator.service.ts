import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
  //eventService is needed to get the event we need
  //router is to use .navigate on
  constructor(private eventService: EventService, private router: Router) {}

  //route to is get the current url parms to use for canActivate
  //canActivate gets a T/F if the event can be navigated to
  canActivate(route: ActivatedRouteSnapshot): boolean {
    //Get from the route.parms the id of event
    //Convert that id to a number and return t/f if the event Exists if F redirect to 404 page
    const eventExist = this.eventService.getEvent(Number(route.params['id']));
    console.log(eventExist);
    if (eventExist) {
      return true;
    } else {
      this.router.navigate(['404']);
      return false;
    }
  }
}
