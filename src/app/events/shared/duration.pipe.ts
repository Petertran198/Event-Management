import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 1:
        return 'Half hour';
      case 2:
        return 'One hour';
      case 3:
        return 'One hour & a half';
      case 4:
        return 'Two hours';
      default:
        return value.toString();
    }
  }
}
