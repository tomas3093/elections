import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "twoDigitPercentage"
})
export class TwoDigitPercentagePipe implements PipeTransform {
  transform(fraction: number, whole: number): number {
    return Number(((fraction / whole) * 100).toFixed(2));
  }
}
