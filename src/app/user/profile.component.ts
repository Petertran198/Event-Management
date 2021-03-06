import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { TOASTR_TOKEN, IToastr } from '../common';
@Component({
  templateUrl: './profile.component.html',
  selector: 'profile',
  styles: [
    `
      em {
        float: right;
        color: red;
      }

      .error {
        border-color: red;
      }
    `,
  ],
})
export class ProfileComponent implements OnInit {
  profileFormGroup: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: IToastr //This is calling the Toastr_Token which is a service that returns the global toastr object
  ) {}
  ngOnInit(): void {
    //This form will have two inputs firstName and lastName
    //With the currentUser.firstName and lastName already inside
    //Adding Validator to make it required field, make it an array if u want multiple validators
    this.firstName = new FormControl(this.authService.currentUser.firstName, [
      Validators.required,
      Validators.pattern('[a-zA-Z].*'),
    ]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, [
      Validators.required,
      Validators.pattern('[a-zA-Z].*'),
    ]);
    //Adding these controls to the form by creating a FormGroup
    //This FormGroup has a firstName and lastName property and these properties VALUES
    //are set to the firstName and LastName FormControl we set above
    this.profileFormGroup = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }

  editProfile(form) {
    this.authService
      .editProfile(form.controls.firstName.value, form.controls.lastName.value)
      .subscribe(() => {
        this.toastr.success('Updated');
      });
  }

  onCancel() {
    this.router.navigate(['./events']);
  }

  isFirstNameInValid() {
    return (
      //If the field is invalid
      //Or if the field is invalid and it has been touched so this will only display after field has been clicked or 'touched'
      this.firstName.invalid ||
      (this.firstName.invalid && this.firstName.touched)
    );
  }

  isLastNameInValid() {
    return (
      this.lastName.invalid || (this.firstName.invalid && this.lastName.touched)
    );
  }

  onLogOut() {
    this.authService.logOut().subscribe(() => {
      this.router.navigate(['/user/login']);
    });
  }
}
