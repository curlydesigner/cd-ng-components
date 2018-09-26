import { Pipe, PipeTransform } from '@angular/core';

/*
 * Run map method on the array of objects
 * Usage:
 *   value | map:key
*/
@Pipe({
  name: 'map'
})
export class MapPipe implements PipeTransform {

  transform(value: any, key: string): any {
    console.log(value, key);
    return value.map(item => item[key]);
  }
}
