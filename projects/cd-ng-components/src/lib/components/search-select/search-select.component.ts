import { Observable } from 'rxjs';
import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'cdc-search-select',
  templateUrl: './search-select.component.html',
  styleUrls: ['./search-select.component.css']
})
export class CDCSearchSelectComponent implements OnChanges {
  @Input() placeholder: string;
  @Input() items$: Observable<CDCSearchSelectComponent.SelectItem[]>;
  @Input() selected: string[];
  @Input() allItemsValue = 'all';

  @Output() valueChange: EventEmitter<string[]> = new EventEmitter();
  @Output() remove: EventEmitter<Event> = new EventEmitter();

  values: string[];
  prevValues: string[] = [];
  searchQuery = '';

  loading = true;

  ngOnChanges(changes) {
    if (changes['items$'] && this.items$) {
      if (!(this.items$ instanceof Observable)) {
        throw Error('CDCSearchSelectComponent: items$ parameter should be Observable');
      }
      this.items$.subscribe(() => this.loading = false);
    }
    if (changes['selected']) {
      if (!(this.selected instanceof Array)) {
        throw Error('CDCSearchSelectComponent: selected parameter should be Array');
      }
      this.values = this.selected ? this.selected : [this.allItemsValue];
      this.prevValues = this.values;
    }
  }

  handleSearchClick($event: Event) {
    $event.stopPropagation();
  }

  handleSearchQueryChange(query: string) {
    this.searchQuery = query;
  }

  handleChange(changes: MatSelectChange) {
    const diff = this.getArrayDifference(this.prevValues, changes.value);

    let selected: string[];
    // selected all - when nothing selected or when clicked
    if (changes.value.length === 0 || diff.indexOf(this.allItemsValue) > -1) {
      selected = [this.allItemsValue];
    } else {
      selected = changes.value.filter(item => item !== this.allItemsValue);
    }
    this.valueChange.emit(selected);
  }

  getArrayDifference(arr1: string[], arr2: string[]): string[] {
    const biggerArray = arr1.length > arr2.length ? arr1 : arr2;
    const smallerArray = arr1.length > arr2.length ? arr2 : arr1;
    return biggerArray.filter(item => smallerArray.indexOf(item) === -1);
  }
}

export namespace CDCSearchSelectComponent {
  export interface SelectItem {
    _id: string;
    name: string;
  }
}
