import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
     // angular/material modules
     MatFormFieldModule,
     MatInputModule,
     MatButtonModule,
     MatIconModule,
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class SharedModule { }
