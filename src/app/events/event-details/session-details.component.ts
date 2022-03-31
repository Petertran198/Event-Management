import { Component, Input, OnChanges } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from './voter.service';
import { ISession } from '../shared';

@Component({
  selector: 'session-details',
  templateUrl: './session-details.component.html',
})
export class SessionDetailsComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filteredBy: string;
  @Input() sortedBy: string;
  @Input() eventId: number;
  filteredSessions: ISession[];

  constructor(private voterService: VoterService, private auth: AuthService) {}

  //ngOnChanges runs/reruns when an @Input changes
  ngOnChanges(): void {
    this.filteredSession(this.filteredBy);
    this.sortedBy === 'Name'
      ? this.filteredSessions.sort(this.sortByNameAsc)
      : this.filteredSessions.sort(this.sortByRatingsDesc);
    console.log(this.filteredSessions);
  }

  filteredSession(filterBy: string) {
    //This allows use to sort the data in an immutabile way like react
    if (this.filteredBy === 'all') {
      this.filteredSessions = [...this.sessions];
    } else {
      this.filteredSessions = this.sessions.filter(
        (session) => session.level === this.filteredBy
      );
    }
  }
  sortByNameAsc(s1, s2) {
    const s1Name = s1.name.toLowerCase();
    const s2Name = s2.name.toLowerCase();
    if (s1Name < s2Name) {
      return -1;
    }
    if (s1Name > s2Name) {
      return 1;
    }
    return 0;
  }

  sortByRatingsDesc(s1, s2) {
    return s2.voters.length - s1.voters.length;
  }

  toggleVote(session: ISession) {
    if (this.isUserHasVoted(session)) {
      this.voterService.removeVote(
        this.eventId,
        session,
        this.auth.currentUser.userName
      );
    } else {
      this.voterService.addVote(
        this.eventId,
        session,
        this.auth.currentUser.userName
      );
    }
  }
  isUserHasVoted(session: ISession) {
    return this.voterService.isUserHasVoted(
      session,
      this.auth.currentUser.userName
    );
  }
}
