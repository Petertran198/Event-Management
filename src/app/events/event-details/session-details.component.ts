import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';

@Component({
  selector: 'session-detail',
  templateUrl: './session-details.component.html',
})
export class SessionDetailsComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filteredBy: string;
  filteredSessions: ISession[];
  //ngOnChanges runs/reruns when an @Input changes
  ngOnChanges(): void {
    //This allows use to sort the data in an immutabile way like react
    if (this.filteredBy === 'all') {
      this.filteredSessions = [...this.sessions];
    } else {
      this.filteredSessions = this.sessions.filter(
        (session) => session.level === this.filteredBy
      );
    }
  }
}
