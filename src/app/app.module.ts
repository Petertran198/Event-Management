import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ToastrService } from './common/toastr.service';

import { EventAppComponent } from './events-app.component';
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

  providers: [EventService, ToastrService], // <-- To add services here

  bootstrap: [EventAppComponent],
})
export class AppModule {}
