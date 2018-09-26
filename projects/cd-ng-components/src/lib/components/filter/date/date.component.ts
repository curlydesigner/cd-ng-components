import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import * as moment_ from 'moment';
import { MatSelectChange, MatDialog } from '@angular/material';
import { CustomDateComponent } from './custom-date/custom-date.component';

const moment = moment_;

export interface FilterDateValue {
  dateFrom: number;
  dateTo: number;
}

@Component({
  selector: 'cdc-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit, OnChanges {
  static RANGES = {
    ALL: 0,
    LAST_30_DAYS: 1,
    LAST_60_DAYS: 2,
    MTD: 3,
    YTD: 4,
    LAST_6_MONTH: 5,
    LAST_12_MONTH: 6,
    CUSTOM: 7
  };

  @Input() query: FilterDateValue;

  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Output() valueChange: EventEmitter<FilterDateValue> = new EventEmitter();

  items: string[] = ['All', 'Last 30 days', 'Last 60 days', 'MTD', 'YTD', '6 months', '12 months', 'Custom'];
  selected: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  ngOnChanges(changes): void {
    if ((changes['dateFrom'] || changes['dateTo']) && this.query.dateFrom && this.query.dateTo) {
      const dates = this.getDates();
      if (this.query.dateTo !== dates.today) {
        this.selected = this.items[DateComponent.RANGES.CUSTOM];
      } else {
        switch (this.query.dateFrom) {
          case dates.mtd:
            this.selected = this.items[DateComponent.RANGES.MTD];
            break;
          case dates.ytd:
            this.selected = this.items[DateComponent.RANGES.YTD];
            break;
          case dates.last30Days:
            this.selected = this.items[DateComponent.RANGES.LAST_30_DAYS];
            break;
          case dates.last60Days:
            this.selected = this.items[DateComponent.RANGES.LAST_60_DAYS];
            break;
          case dates.last6Month:
            this.selected = this.items[DateComponent.RANGES.LAST_6_MONTH];
            break;
          case dates.last12Month:
            this.selected = this.items[DateComponent.RANGES.LAST_12_MONTH];
            break;
          default:
            this.selected = this.items[DateComponent.RANGES.CUSTOM];
            break;
        }
      }
    } else {
      this.selected = this.items[DateComponent.RANGES.ALL];
    }
  }

  handleChange({ value }: MatSelectChange) {
    const idx = this.items.indexOf(value);
    const dates = this.getDates();
    if (idx === DateComponent.RANGES.CUSTOM) {
      const dialogRef = this.dialog.open(CustomDateComponent, {
        width: '250px',
        data: { dateFrom: this.query.dateFrom || dates.mtd, dateTo: this.query.dateTo || dates.today }
      });

      dialogRef.afterClosed().subscribe(result => {
        this.valueChange.emit({ dateFrom: result.dateFrom, dateTo: result.dateTo });
      });
      return;
    }
    const res = { dateFrom: 0, dateTo: dates.today };
    switch (idx) {
      case DateComponent.RANGES.MTD:
        res.dateFrom = dates.mtd;
        break;
      case DateComponent.RANGES.YTD:
        res.dateFrom = dates.ytd;
        break;
      case DateComponent.RANGES.LAST_30_DAYS:
        res.dateFrom = dates.last30Days;
        break;
      case DateComponent.RANGES.LAST_60_DAYS:
        res.dateFrom = dates.last60Days;
        break;
      case DateComponent.RANGES.LAST_6_MONTH:
        res.dateFrom = dates.last6Month;
        break;
      case DateComponent.RANGES.LAST_12_MONTH:
        res.dateFrom = dates.last12Month;
        break;
    }
    this.valueChange.emit(res);
  }

  getDates() {
    const now = new Date();
    const today = moment(new Date(now.getFullYear(), now.getMonth(), now.getDate()));
    return {
      today: today.valueOf(),
      mtd: moment(today).startOf('month').valueOf(),
      ytd: moment(today).startOf('year').valueOf(),
      last30Days: moment(today).add(-30, 'days').valueOf(),
      last60Days: moment(today).add(-60, 'days').valueOf(),
      last6Month: moment(today).add(-6, 'months').valueOf(),
      last12Month: moment(today).add(-12, 'months').valueOf()
    };
  }
}
