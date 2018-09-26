import { CDCSearchInputModule } from './../search-input/search-input.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CDCSearchSelectComponent } from './search-select.component';
import { MaterialModule } from '../../material.module';
import { SelectFilterPipe } from './select-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    CDCSearchInputModule
  ],
  declarations: [
    SelectFilterPipe,
    CDCSearchSelectComponent
  ],
  exports: [
    CDCSearchSelectComponent
  ]
})
export class CDCSearchSelectModule { }
export { CDCSearchSelectComponent };
