import { Injectable } from '@angular/core';
//This lets typescripted know that there is a variable toastr declared somewhere else already.
//Without this typescript would not know this is already initalized
//In this case it is declared globally since we imported it in angular.json
declare let toastr;

@Injectable()
export class ToastrService {
  success(message: string, title?: string) {
    toastr.success(message, title);
  }
  warning(message: string, title?: string) {
    toastr.warning(message, title);
  }
  error(message: string, title?: string) {
    toastr.error(message, title);
  }
  info(message: string, title?: string) {
    toastr.info(message, title);
  }
}
