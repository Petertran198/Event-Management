import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `<div>
    <hr />
    <div class="well hoverwell thumbnail">
      <h1>{{ event.name }}</h1>
      <div>Date: {{ event.name }}</div>
      <div>Time: {{ event.time }}</div>
      <div>Price: \${{ event.price }}</div>
    </div>
  </div> `,
})
export class EventThumbnailComponent {
  @Input() event: any;
}
