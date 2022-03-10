import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventAppComponent } from './events-app.component';

@NgModule({
  declarations: [EventAppComponent], // <- When you want to add a component, pipe, or directive u must declare them here
  imports: [BrowserModule], // <-- Used to import other modules
  providers: [], // <-- To add services here
  bootstrap: [EventAppComponent],
})
export class AppModule {}
