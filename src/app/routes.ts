import { Routes } from '@angular/router';
import { EventDetailComponent } from './events/event-details/event-details.component';
import { EventListsComponent } from './events/event-lists.component';

export const appRoutes: Routes = [
  { path: 'events', component: EventListsComponent },
  { path: 'events/:id', component: EventDetailComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];
