import { CDCSearchSelectComponent } from 'cd-ng-components';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-search-select',
  templateUrl: './search-select.component.html',
  styleUrls: ['./search-select.component.css']
})
export class SearchSelectComponent implements OnInit {
  items$: Observable<CDCSearchSelectComponent.SelectItem[]>;
  selectedItems = ['1'];

  constructor() {
    this.items$ = of([{
      name: 'Account 1',
      _id: '1'
    }, {
      name: 'Account 2',
      _id: '2'
    }]).pipe(delay(2000));
  }

  ngOnInit() {
  }

  handleChange(values: string[]) {
    this.selectedItems = values;
  }
}
