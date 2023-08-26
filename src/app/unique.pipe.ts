import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {
  transform(value: any[]): any[] {
    if (!value) {
      return [];
    }

    // Use a Set to filter out duplicates and convert back to an array
    return [...new Set(value)];
  }
}
