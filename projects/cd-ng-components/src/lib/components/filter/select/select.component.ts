import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FilterOption } from '../filter.component';
import { MatSelectChange } from '@angular/material';
import { filter } from 'rxjs/operators';

export interface FilterSelectValue {
  operator?: string;
  values: string[];
}

@Component({
  selector: 'cdc-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit, OnChanges {
  @Input() filter: FilterOption;
  @Input() query: FilterSelectValue;
  @Input() operator: string;

  @Output() valueChange: EventEmitter<FilterSelectValue> = new EventEmitter();
  @Output() remove: EventEmitter<Event> = new EventEmitter();

  searchQuery = '';

  loading = true;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes['filter'] && this.filter && this.filter.items$) {
      this.filter.items$.subscribe(() => this.loading = false);
    }
  }

  handleChange(values: string[]) {
    this.valueChange.emit(Object.assign({}, this.query, { values }));
  }

  handleOperatorChange(operator: string) {
    this.valueChange.emit(Object.assign({}, this.query, { operator }));
  }

  handleRemove($event: Event) {
    $event.stopPropagation();
    this.remove.emit($event);
  }
}
