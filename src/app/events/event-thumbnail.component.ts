import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `<div>
    <hr />
    <div class="well hoverwell thumbnail">
      <h2>{{ event.name }}</h2>
      <div>Date: {{ event.name }}</div>
      <div>Time: {{ event.time }}</div>
      <div>Price: \${{ event.price }}</div>
    </div>
  </div> `,
})
export class EventThumbnailComponent {
  @Input() event: any;
}
