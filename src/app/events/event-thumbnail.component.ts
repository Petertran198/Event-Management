import { Component, Input } from '@angular/core';
import { IEvent } from './shared';
@Component({
  selector: 'event-thumbnail',
  template: `<div>
    <div class="well hoverwell thumbnail" [routerLink]="['/events', event.id]">
      <h1>{{ event?.name | titlecase }}</h1>
      <div>Date: {{ event?.date | date }}</div>
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
      <div [hidden]="!event?.onlineUrl">Online Url: {{ event.onlineUrl }}</div>
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
  @Input() event: IEvent;

  styleForEarlyTime() {
    const isEarly: boolean = this.event?.time === '8:00 am';
    return { green: isEarly, 'display-1': isEarly };
  }
}
