import { CDCSearchSelectModule } from './search-select/search-select.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CDCFilterModule } from './filter/filter.module';

@NgModule({
  imports: [
    CommonModule,
    CDCFilterModule,
    CDCSearchSelectModule,
  ],
  declarations: []
})
export class ComponentsModule { }
