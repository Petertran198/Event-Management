import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Import FormsModule to be able to allow our components in this module to use form
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { CurrentUserRouteActivator } from './currentUser-route-activator.service';
// New lazilyloaded module created
//Notice how RouterModule is calling .forChild instead of forRoot
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes),
  ],
  declarations: [ProfileComponent, LoginComponent], // U declare all component here that belongs to this module
  providers: [CurrentUserRouteActivator],
})
export class UserModule {}
