import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPipe } from './map/map.pipe';
import { SelectFilterPipe } from './select-filter/select-filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MapPipe,
    SelectFilterPipe,
  ],
  exports: [
    MapPipe,
    SelectFilterPipe,
  ]
})
export class PipesModule { }
