import { CDCSearchInputModule } from './../../search-input/search-input.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { OperatorComponent } from './operator/operator.component';
import { PipesModule } from '../../../pipes/pipes.module';
import { MaterialModule } from '../../../material.module';
import { CDCSearchSelectModule } from '../../search-select/search-select.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,

    CDCSearchInputModule,
    CDCSearchSelectModule,
    PipesModule,
  ],
  declarations: [
    SelectComponent,
    OperatorComponent,
  ],
  exports: [
    SelectComponent
  ]
})
export class SelectModule { }
