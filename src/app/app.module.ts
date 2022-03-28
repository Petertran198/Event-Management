import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  TOASTR_TOKEN,
  IToastr,
  CollapsibleWellComponent,
  JQUERY_TOKEN,
  SimpleModal,
} from './common/index';
import { EventAppComponent } from './events-app.component';
import {
  EventListsComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailComponent,
  SessionDetailsComponent,
  CreateSessionsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventsListResolver,
  DurationPipe,
} from './events/index';

import { NavbarComponent } from './navbar/navbar.component';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';

// Get the global toastr object
let toastr: IToastr = window['toastr'];
// Get the global jquery object
let jquery = window['$'];

@NgModule({
  declarations: [
    CollapsibleWellComponent,
    EventAppComponent,
    EventListsComponent,
    EventThumbnailComponent,
    NavbarComponent,
    CreateEventComponent,
    CreateSessionsComponent,
    EventDetailComponent,
    SessionDetailsComponent,
    DurationPipe,
    SimpleModal,
  ], // <- When you want to add a component, pipe, or directive u must declare them here

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ], // <-- Used to import other modules

  providers: [
    EventService,
    EventRouteActivator,
    EventsListResolver,
    AuthService,
    // { provide: ..., useValue:..}  long hand syntax {provide: service1, useValue: callService1 }
    // It is saying when service1 is request use callService1 obj to fullfill it
    { provide: 'canDeactivateEvent', useValue: checkIfCanDeactivateEvent },
    //Allow for us to create a service for toastr by only calling the global toastr object, and not needing a class
    //when TOASTR_TOKEN is called use the global toastr object we created above,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQUERY_TOKEN, useValue: jquery },
  ], // <-- To add services here.

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
