import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `<div>
    <div class="well hoverwell thumbnail">
      <h1>{{ event?.name }}</h1>
      <div>Date: {{ event?.name }}</div>
      <div>Time: {{ event?.time }}</div>
      <div>Price: \${{ event?.price }}</div>
      <!-- The safe navigation operator will check for null, allowing the field to display if it isnt empty -->
      <!-- It will shortcircut everything after so no need to continiously put ? after ever properties -->
      <!-- but for example if u want the second property location to be nullable and will only display if there is one 
          you must chain it -->
      <!-- In this example it is saying event can be null but if it is there. This will only display if location is populated -->
      <div>Location: {{ event?.location?.address }}</div>
    </div>
  </div> `,
})
export class EventThumbnailComponent {
  @Input() event: any;
}
