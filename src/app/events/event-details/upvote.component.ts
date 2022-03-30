import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'upvote',
  template: `
    <div class="voterWidgetContiner pointable" (click)="onClick()">
      <div class="well votingWidget">
        <div class="votingButton">
          <i
            class="glyphicon glyphicon-heart"
            [style.color]="this.voteIconColor"
          ></i>
        </div>
        <div class="badge badge-inverse">
          <div>{{ count }}</div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./upvote.component.css'],
})
export class UpVoteComponent {
  voteIconColor: string;
  //Used input property setter to read what value voted is and than changed icon color according to that property
  @Input() set voted(value: boolean) {
    this.voteIconColor = value == true ? 'red' : 'white';
  }
  @Input() count: number;
  @Output() vote = new EventEmitter();

  onClick() {
    this.vote.emit({});
  }
}
