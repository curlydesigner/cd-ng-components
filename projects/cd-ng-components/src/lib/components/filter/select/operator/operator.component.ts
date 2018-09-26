import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cdc-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit, OnChanges {

  @Input() operator: string;
  @Input() operators: string[];
  @Input() disabled: boolean;

  @Output() change: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes['operators'] && this.operators) {
      if (!this.operator) {
        this.operator = this.operators ? this.operators[0] : undefined;
      }
    }
  }

  handleClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    const index = (this.operators.indexOf(this.operator) + 1) % this.operators.length;
    this.change.emit(this.operators[index]);
  }
}
