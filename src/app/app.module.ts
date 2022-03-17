import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ToastrService } from './common/toastr.service';
import { EventAppComponent } from './events-app.component';

import {
  CreateSessionsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListsComponent,
  EventThumbnailComponent,
  EventsListResolver,
  EventService,
} from './events/index';

import { NavbarComponent } from './navbar/navbar.component';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';
@NgModule({
  declarations: [
    EventAppComponent,
    EventListsComponent,
    EventThumbnailComponent,
    NavbarComponent,
    CreateEventComponent,
    CreateSessionsComponent,
  ], // <- When you want to add a component, pipe, or directive u must declare them here

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ], // <-- Used to import other modules

  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventsListResolver,
    AuthService,
    { provide: 'canDeactivateEvent', useValue: checkIfCanDeactivateEvent },
  ], // <-- To add services here.
  // { provide: ..., useValue:..}  long hand syntax {provide: service1, useValue: callService1 }
  // It is saying when service1 is request use callService1 to fullfill it
  bootstrap: [EventAppComponent],
})
export class AppModule {}

//This is the method we call when canDeactivateEvent is called
//The component CreateEventComponent is being passed as the first parmater  as it is injected in
export function checkIfCanDeactivateEvent(component: CreateEventComponent) {
  if (component.isDirtyState) {
    //returns True if 'Ok' False if 'Cancel'
    return window.confirm(
      'This page is not saved are you sure you want to leave?'
    );
  } else {
    return true;
  }
}
