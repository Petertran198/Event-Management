import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';
import { CurrentUserRouteActivator } from './currentUser-route-activator.service';
//Routes to import into usermodule child routes
export const userRoutes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [CurrentUserRouteActivator],
  },
  { path: 'login', component: LoginComponent },
];
