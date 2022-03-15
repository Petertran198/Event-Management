import { Component } from '@angular/core';
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
  // We made it public so we can use it in the html
  constructor(public auth: AuthService) {}
}
