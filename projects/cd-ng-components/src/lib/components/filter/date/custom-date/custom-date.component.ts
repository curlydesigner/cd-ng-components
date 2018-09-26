import {Component, Inject} from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Logger } from 'cd-shared';

@Component({
  selector: 'cdc-custom-date',
  templateUrl: './custom-date.component.html',
  styleUrls: ['./custom-date.component.css']
})
export class CustomDateComponent {
    logger: Logger = new Logger('CustomDateComponent');

    dateFromControl = new FormControl('', [Validators.required]);
    dateToControl = new FormControl('', [Validators.required]);

    formGroup: FormGroup;

    today: Date;

    constructor(private formBuilder: FormBuilder,
                public dialogRef: MatDialogRef<CustomDateComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {

        this.formGroup = this.formBuilder.group({
            dateFrom: this.dateFromControl,
            dateTo: this.dateToControl
        });
        this.formGroup.patchValue({
            dateFrom: new Date(data.dateFrom),
            dateTo: new Date(data.dateTo)
        });
        const now = new Date();
        this.today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    }

    handleSubmit($event) {
        $event.preventDefault();
        if (this.formGroup.valid) {
            this.dialogRef.close({dateFrom: this.formGroup.value.dateFrom.getTime(), dateTo: this.formGroup.value.dateTo.getTime()});
        }
    }
}
