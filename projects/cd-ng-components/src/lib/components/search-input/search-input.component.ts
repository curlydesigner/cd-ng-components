import {Component, Input, Output, EventEmitter, OnInit, OnChanges} from '@angular/core';
import {Subject} from 'rxjs';
import {Logger} from 'cd-shared';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'cdc-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class CDCSearchInputComponent implements OnInit {
  @Input() query = '';
  @Input() debounce = 700;
  @Input() placeholder: string;

  @Output() inputChange: EventEmitter<string> = new EventEmitter();

  logger: Logger = new Logger('SearchInputComponent');

  change$: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.change$
        .pipe(
            debounceTime(this.debounce), // wait 500ms after the last event before emitting last event
            distinctUntilChanged()
        )// only emit if value is different from previous value
        .subscribe(query => {
          // this.logger.debug('subscribe', query);
          this.inputChange.emit(query);
        });
  }

  handleQueryChange(query: string) {
    // this.logger.debug('handleQueryChange', query);
    this.query = query;
    this.change$.next(this.query);
  }

  handleClear() {
    // this.logger.debug('handleClear', this.query);
    this.query = '';
    this.change$.next(this.query);
  }
}
