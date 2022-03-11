import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventAppComponent } from './events-app.component';
import { EventListsComponent } from './events/event-lists.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    EventAppComponent,
    EventListsComponent,
    EventThumbnailComponent,
    NavbarComponent,
  ], // <- When you want to add a component, pipe, or directive u must declare them here

  imports: [BrowserModule], // <-- Used to import other modules

  providers: [], // <-- To add services here

  bootstrap: [EventAppComponent],
})
export class AppModule {}
