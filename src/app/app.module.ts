import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ToastrService } from './common/toastr.service';

import { EventAppComponent } from './events-app.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListsComponent } from './events/event-lists.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventService } from './events/shared/event.service';
import { NavbarComponent } from './navbar/navbar.component';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    EventAppComponent,
    EventListsComponent,
    EventThumbnailComponent,
    NavbarComponent,
  ], // <- When you want to add a component, pipe, or directive u must declare them here

  imports: [BrowserModule, RouterModule.forRoot(appRoutes)], // <-- Used to import other modules

  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
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
  }
}
