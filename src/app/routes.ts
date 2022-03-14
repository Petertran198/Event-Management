import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventDetailComponent } from './events/event-details/event-details.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListsComponent } from './events/event-lists.component';

//canActivate =  T = route is blocked, F = route is unblocked
//canDeactivate = T = you can leave page, F = you can not leave page
export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateEvent'], // <-- canDeactivateEvent is the name of the service we are going to use when  canDeactivate run
  },
  { path: 'events', component: EventListsComponent },
  {
    path: 'events/:id',
    component: EventDetailComponent,
    canActivate: [EventRouteActivator],
  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];
