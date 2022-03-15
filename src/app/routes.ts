import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import {
  CreateEventComponent,
  EventRouteActivator,
  EventListsComponent,
  EventsListResolver,
  EventDetailComponent,
} from './events/index';

//canActivate =  True = route is blocked, False = route is unblocked
//canDeactivate = True = you can leave page, False = you can not leave page
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
