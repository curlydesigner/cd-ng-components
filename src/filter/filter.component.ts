import { FilterValue, FilterOption } from 'cd-ng-components';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  query: FilterValue = {
    'accounts': { values: ['1'] },
    'tags': { operator: 'Or', values: ['2'] },
    // 'date': {dateFrom: undefined, dateTo: undefined}
  };
  filters: FilterOption[] = [{
    id: 'accounts',
    name: 'Accounts',
    type: 'select',
    items$: of([{
      name: 'Account 1',
      _id: '1'
    }, {
      name: 'Account 2',
      _id: '2'
    }]).pipe(delay(2000))
  }, {
    id: 'tags',
    name: 'Tags',
    type: 'select',
    items$: of([{
      name: 'Tag 1',
      _id: '1'
    }, {
      name: 'Tag 2',
      _id: '2'
    }]).pipe(delay(2000)),
    operators: ['Or', 'Only', 'And']
  }, {
    id: 'date',
    name: 'Date Range',
    type: 'date'
  }];
  constructor() { }

  ngOnInit() {
  }


  handleFilterChange(query: FilterValue) {
    console.log('app', 'handleFilterChange', query);
    this.query = query;
  }
}
