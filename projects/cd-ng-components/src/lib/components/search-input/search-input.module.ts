import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CDCSearchInputComponent } from './search-input.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../material.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    CDCSearchInputComponent
  ],
  exports: [
    CDCSearchInputComponent,
  ]
})
export class CDCSearchInputModule { }
