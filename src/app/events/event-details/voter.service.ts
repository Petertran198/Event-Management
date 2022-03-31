import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ISession } from '../shared';

@Injectable()
export class VoterService {
  constructor(private http: HttpClient) {}
  //Generic error handling method
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  removeVote(eventId: number, session: ISession, username: string) {
    session.voters = session.voters.filter((voter) => voter != username);
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${username}`;
    this.http
      .delete(url)
      .pipe(catchError(this.handleError('removeVote')))
      .subscribe();
  }

  addVote(eventId: number, session: ISession, username: string) {
    const voterArr: string[] = [...session.voters, username];
    session.voters = voterArr;
    const options = {
      headers: new HttpHeaders({ 'Content-Type': '/application/json' }),
    };
    console.log(eventId);
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${username}`;
    this.http
      .post(url, {}, options)
      .pipe(catchError(this.handleError('addVote')))
      .subscribe();
  }

  isUserHasVoted(session: ISession, username: string) {
    //The some() method tests whether at least one element in the array passes the test returns true if it does else false
    return session.voters.some((voter) => voter === username);
  }
}
