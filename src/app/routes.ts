import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventDetailComponent } from './events/event-details/event-details.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListsComponent } from './events/event-lists.component';
import { EventsListResolver } from './events/events-list-resolver.service';

//canActivate =  T = route is blocked, F = route is unblocked
//canDeactivate = T = you can leave page, F = you can not leave page
export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateEvent'], // <-- canDeactivateEvent is the name of the service we are going to use when  canDeactivate run
  },
  {
    path: 'events',
    component: EventListsComponent,
    resolve: { eventsResolvedKey: EventsListResolver }, // Before resolving this route call EventsListResolver
    // And when it finishes getting that data add that data to the route
    //as a property name eventsResolvedKey
  },
  {
    path: 'events/:id',
    component: EventDetailComponent,
    canActivate: [EventRouteActivator],
  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  // loadChildren takes two parts
  // first is the path to the module
  //Second follow # is the module class
  // old way loadChildren: './user/user.module#UserModule' works in older angular version
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((module) => module.UserModule),
  },
];
