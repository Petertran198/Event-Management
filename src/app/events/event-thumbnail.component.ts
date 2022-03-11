import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `<div>
    <hr />
    <div class="well hoverwell thumbnail">
      <h2>{{ event.name }}</h2>
      <div>Date: {{ event.name }}</div>
      <div>Time: {{ event.time }}</div>
      <div>Price: \${{ event.price }}</div>
      <button (click)="handleClicked()">Click for type of event</button>
    </div>
  </div> `,
})
export class EventThumbnailComponent {
  @Input() event: any;
  @Output() eventClicked = new EventEmitter();

  handleClicked() {
    this.eventClicked.emit(this.event.name);
  }
}
