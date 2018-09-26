import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Logger } from 'cd-shared';

export interface FilterSelectorItem {
  id: string;
  name: string;
}

@Component({
  selector: 'cdc-filter-selector',
  templateUrl: './filter-selector.component.html',
  styleUrls: ['./filter-selector.component.css']
})
export class FilterSelectorComponent implements OnInit, OnChanges {

  @Input() types: FilterSelectorItem[] = [];
  @Input() selected: string[] = [];
  @Output() valueChange: EventEmitter<string[]> = new EventEmitter();

  selectedTypes: FilterSelectorItem[];

  logger: Logger = new Logger('FilterSelectorComponent');

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.logger.debug('ngOnChanges', this.types, this.selected);
    this.selectedTypes = this.types.filter(type => this.selected.indexOf(type.id) === -1);
  }

  handleTypeChange(typeId: string) {
    this.logger.debug('handleFilterTypeChange', typeId);
    this.valueChange.emit([...this.selected, typeId]);
  }
}
