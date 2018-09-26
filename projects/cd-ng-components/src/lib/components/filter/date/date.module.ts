import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DateComponent } from './date.component';
import { CustomDateComponent } from './custom-date/custom-date.component';
import {
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    // angular/material modules
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,

  ],
  declarations: [
    DateComponent,
    CustomDateComponent,
  ],
  exports: [
    DateComponent,
  ],
  entryComponents: [
    CustomDateComponent,
  ]
})
export class DateModule { }
