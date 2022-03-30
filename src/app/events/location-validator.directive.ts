import { Directive } from '@angular/core';
import { FormGroup, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validateLocation]',
  //The use of Provider in directive lets angular know that we have a custom validator we want to add to angular's validators
  //Similar to how we did in appmodule but with multi = true we are not overridding NG_Validators but adding our custom LocationValidator in
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: LocationValidatorDirective,
      multi: true,
    },
  ],
})

//Custom validator that checks two SIBLING fields
export class LocationValidatorDirective implements Validator {
  //Implemented the Validator interface which has a validate method that takes in a formGroup
  validate(formGroup: FormGroup): { [key: string]: any } {
    let addressControl = formGroup.controls['address'];
    let cityControl = formGroup.controls['city'];
    let countryControl = formGroup.controls['country'];
    //Online Url is in a sibling div that this directive is seating on
    //root will bring us to that control and than we can let typescript know that the root is also a FormGroup
    let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];
    if (
      (addressControl &&
        addressControl.value &&
        cityControl &&
        cityControl.value &&
        countryControl &&
        countryControl.value) ||
      (onlineUrlControl && onlineUrlControl.value)
    ) {
      //U return null if validator passes
      return null;
    } else {
      // U return an object if validator fails
      return { validateLocation: false };
    }
  }
}
