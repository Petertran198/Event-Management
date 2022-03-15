import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';

//Routes to import into usermodule child routes
export const userRoutes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
];
