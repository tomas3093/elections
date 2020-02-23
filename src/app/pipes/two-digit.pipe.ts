import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "twoDigit"
})
export class TwoDigitPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 10) {
      return "0" + value;
    }

    return "" + value;
  }
}
