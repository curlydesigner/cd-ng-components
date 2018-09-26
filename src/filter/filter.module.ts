import { AppMaterialModule } from '../app/app.material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { CDCFilterModule } from 'cd-ng-components';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    CDCFilterModule
  ],
  declarations: [
    FilterComponent
  ]
})
export class FilterModule { }
