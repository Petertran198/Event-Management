import { Component, Input } from '@angular/core';
import { ISession } from '../shared';

@Component({
  selector: 'session-detail',
  templateUrl: './session-details.component.html',
})
export class SessionDetailsComponent {
  @Input() sessions: ISession[];
}
