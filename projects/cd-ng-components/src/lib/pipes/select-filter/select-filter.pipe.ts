import { Pipe, PipeTransform } from '@angular/core';
import { FilterData } from '../../components/filter/filter.component';

@Pipe({
  name: 'selectFilter'
})
export class SelectFilterPipe implements PipeTransform {

  transform(options: FilterData[], text: string): any {
    text = text.toLowerCase();
    return options ? options.filter(option => option.name.toLowerCase().indexOf(text) > -1) : options;
  }
}
