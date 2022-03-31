import { Component, OnInit } from '@angular/core';
import { EventService, ISession } from '../events';
import { AuthService } from '../user/auth.service';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      .nav.navbar-nav {
        font-size: 15px;
      }
      #searchForm {
        margin-right: 100px;
      }
      li > a.active {
        color: red;
      }
      @media (max-width: 1200px) {
        #searchForm {
          display: none;
        }
      }
    `,
  ],
})
export class NavbarComponent {
  searchTerm;
  foundSessions: ISession[];
  // We made it public so we can use it in the html
  constructor(public auth: AuthService, private eventService: EventService) {}

  handleFormSubmit(term) {
    this.eventService
      .getSessionsBySearchTerm(term)
      .subscribe((sessions: ISession[]) => {
        this.foundSessions = sessions;
      });
  }
}
