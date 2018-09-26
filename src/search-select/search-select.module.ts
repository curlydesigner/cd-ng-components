import { CDCSearchSelectModule } from 'cd-ng-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSelectComponent } from './search-select.component';
import { AppMaterialModule } from '../app/app.material.module';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    CDCSearchSelectModule
  ],
  declarations: [
    SearchSelectComponent
  ]
})
export class SearchSelectModule { }

