import {Component, OnChanges, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Observable, of } from 'rxjs';
import { Logger } from 'cd-shared';
import { FilterSelectValue } from './select/select.component';
import { FilterDateValue } from './date/date.component';

export interface FilterOption {
  id: string;
  name: string;
  items$?: Observable<FilterData[]>;
  type: 'date' | 'select';
  operators?: string[];
}

export interface FilterData {
  name: string;
  _id: string;
}

export interface FilterValue {[key: string]: FilterSelectValue | FilterDateValue | string; }

@Component({
  selector: 'cdc-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class CDCFilterComponent implements OnInit, OnChanges {

  @Input() query: FilterValue;
  @Input() options: FilterOption[];
  @Input() placeholder: string;

  @Output() valueChange: EventEmitter<FilterValue> = new EventEmitter();

  logger: Logger = new Logger('FilterComponent');

  selectedTypes: string[] = [];

  tagsOperatorLabel: string;


  selectedFilters: FilterOption[] = [];

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes['query']) {
      this.logger.debug('ngOnChanges', 'query', this.query);
      const selected = Object.keys(this.query);
      this.handleSelectedFilterChange(selected);
    }
  }

  handleSelectedFilterChange(selected: string[]) {
    this.logger.debug('handleSelectedFilterChange', selected);
    this.selectedFilters = this.options.filter(filter => selected.indexOf(filter.id) > -1);
  }

  handleQueryChange(query: string) {
    this.logger.debug('handleQueryInputChange', this.query, query);
    this.valueChange.emit(Object.assign({}, this.query, {query: query.length > 0 ? query : undefined}));
  }

  handleFilterChange(query: FilterSelectValue | FilterDateValue | string, filterId: string) {
    this.logger.debug('handleFilterChange', this.query, query, filterId);
    const filter: FilterValue = {};
    filter[filterId] = query;
    this.valueChange.emit(Object.assign({}, this.query, filter));
  }

  handleFilterRemove(typeId: string) {
    this.logger.debug('handleFilterRemove', typeId);
    this.selectedFilters = this.selectedFilters.filter(filter => typeId !== filter.id);
    const query = this.query;
    delete query[typeId];
    this.valueChange.emit(Object.assign({}, query));
  }

  isSelected(type: string): boolean {
    return this.selectedTypes.indexOf(type) >= 0;
  }
}
