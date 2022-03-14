import { Routes } from '@angular/router';
import { CreateEventComponent } from './events/create-event.component';
import { EventDetailComponent } from './events/event-details/event-details.component';
import { EventListsComponent } from './events/event-lists.component';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventListsComponent },
  { path: 'events/:id', component: EventDetailComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];
