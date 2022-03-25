import { InjectionToken } from '@angular/core';
//This service shouldnt need a wrapper like below because toastr service only requires toastr instance and it has all the notification methods in the package,
export let TOASTR_TOKEN = new InjectionToken<IToastr>('TOASTR');

export interface IToastr {
  success(msg: string, title?: string): void;
  info(msg: string, title?: string): void;
  warning(msg: string, title?: string): void;
  error(msg: string, title?: string): void;
}

//bad way ----------------------------------------------
// import { Injectable } from '@angular/core';

// This lets typescripted know that there is a variable toastr declared somewhere else already.
// Without this typescript would not know this is already initalized
// In this case it is declared globally since we imported it in angular.json
// declare let toastr;

// /Old way not as convenient as its a wrapper for toastr when toastr doesnt even need it
// @Injectable()
// export class ToastrService {
//   success(message: string, title?: string) {
//     toastr.success(message, title);
//   }
//   warning(message: string, title?: string) {
//     toastr.warning(message, title);
//   }
//   error(message: string, title?: string) {
//     toastr.error(message, title);
//   }
//   info(message: string, title?: string) {
//     toastr.info(message, title);
//   }
// }
