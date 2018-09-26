import { CDCSearchInputModule } from 'cd-ng-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './search-input.component';
import { AppMaterialModule } from '../app/app.material.module';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,

    CDCSearchInputModule
  ],
  declarations: [SearchInputComponent]
})
export class SearchInputModule { }
