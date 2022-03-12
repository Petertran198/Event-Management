import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `<div>
    <div class="well hoverwell thumbnail">
      <h1>{{ event?.name }}</h1>
      <div>Date: {{ event?.name }}</div>

      <!-- This will display the .green class and .random-class if it meets this condition -->
      <div
        [ngSwitch]="event?.time"
        [ngClass]="{
          green: event?.time === '8:00 am',
          'random-class': event?.time === '8:00 am'
        }"
      >
        Time: {{ event?.time }}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: \${{ event?.price }}</div>
      <div [hidden]="!event?.location">
        Location: {{ event?.location?.address }}
      </div>
      <div [hidden]="!event?.locationUrl">
        Online Url: {{ event.locationUrl }}
      </div>
    </div>
  </div> `,
  styles: [
    `
      .green {
        color: green;
      }
    `,
  ],
})
export class EventThumbnailComponent {
  @Input() event: any;
}
