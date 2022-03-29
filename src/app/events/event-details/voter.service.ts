import { Injectable } from '@angular/core';
import { ISession } from '../shared';

@Injectable()
export class VoterService {
  removeVote(session: ISession, username: string) {
    session.voters = session.voters.filter((voter) => voter != username);
  }

  addVote(session: ISession, username: string) {
    const voterArr: string[] = [...session.voters, username];
    session.voters = voterArr;
  }

  isUserHasVoted(session: ISession, username: string) {
    //The some() method tests whether at least one element in the array passes the test returns true if it does else false
    return session.voters.some((voter) => voter === username);
  }
}
