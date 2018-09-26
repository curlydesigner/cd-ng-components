import { CDCSearchInputModule } from './../search-input/search-input.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CDCFilterComponent } from './filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { FilterSelectorComponent } from './filter-selector/filter-selector.component';
import { PipesModule } from '../../pipes/pipes.module';
import { DateModule } from './date/date.module';
import { SelectModule } from './select/select.module';
import { MaterialModule } from '../../material.module';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,

    OverlayModule,
    // local modules
    CDCSearchInputModule,
    PipesModule,
    DateModule,
    SelectModule,
  ],
  declarations: [
    CDCFilterComponent,
    FilterSelectorComponent,
  ],
  exports: [
    CDCFilterComponent,
  ],
  entryComponents: []
})
export class CDCFilterModule { }

export { FilterOption, FilterValue } from './filter.component';
export { FilterSelectValue } from './select/select.component';
export { FilterDateValue } from './date/date.component';
