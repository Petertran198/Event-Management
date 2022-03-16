import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
@Component({
  templateUrl: './profile.component.html',
  selector: 'profile',
})
export class ProfileComponent implements OnInit {
  profileFormGroup: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    //This form will have two inputs firstName and lastName
    //With the currentUser.firstName and lastName already inside
    let firstName = new FormControl(this.authService.currentUser.firstName);
    let lastName = new FormControl(this.authService.currentUser.lastName);
    //Adding these controls to the form by creating a FormGroup
    //This FormGroup has a firstName and lastName property and these properties VALUES
    //are set to the firstName and LastName FormControl we set above
    this.profileFormGroup = new FormGroup({
      firstName: firstName,
      lastName: lastName,
    });
  }

  editProfile(form) {
    this.authService.editProfile(
      form.controls.firstName.value,
      form.controls.lastName.value
    );

    this.router.navigate(['./events']);
  }

  onCancel() {
    this.router.navigate(['./events']);
  }
}
