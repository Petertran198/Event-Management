import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
// New lazilyloaded module created
//Notice how RouterModule is calling .forChild instead of forRoot
@NgModule({
  imports: [CommonModule, RouterModule.forChild(userRoutes)],
  declarations: [ProfileComponent],
  providers: [],
})
export class UserModule {}
