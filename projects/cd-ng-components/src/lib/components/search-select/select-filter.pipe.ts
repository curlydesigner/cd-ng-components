import { CDCSearchSelectComponent } from './search-select.component';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectFilter'
})
export class SelectFilterPipe implements PipeTransform {

  transform(options: CDCSearchSelectComponent.SelectItem[], text: string): any {
    text = text.toLowerCase();
    return options ? options.filter(option => option.name.toLowerCase().indexOf(text) > -1) : options;
  }
}
