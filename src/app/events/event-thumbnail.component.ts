import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `<div>
    <div class="well hoverwell thumbnail">
      <h1>{{ event?.name }}</h1>
      <div>Date: {{ event?.name }}</div>
      <div [ngSwitch]="event?.time">
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
})
export class EventThumbnailComponent {
  @Input() event: any;
}
