import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CDCFilterComponent} from './filter.component';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';

xdescribe('FilterComponent', () => {
  let component: CDCFilterComponent;
  let fixture: ComponentFixture<CDCFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ CDCFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CDCFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add/remove filter items', () => {
    let debugElement = fixture.debugElement.query(By.css('app-select-search app-select-button button.dropdown-toggle'));
    debugElement.triggerEventHandler('click', 'click');
    fixture.detectChanges();
    // click on select button
    debugElement = fixture.debugElement.query(By.css('app-select-search .item .btn'));
    debugElement.triggerEventHandler('click', 'click');
    fixture.detectChanges();
    expect(component.selectedTypes.length).toEqual(1);
    debugElement = fixture.debugElement.query(By.css('.filters .accounts'));
    expect(debugElement).not.toBeNull();
    // click on remove button
    debugElement = fixture.debugElement.query(By.css('.filters .accounts .btn-remove'));
    debugElement.triggerEventHandler('click', 'click');
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('.filters .accounts'));
    expect(debugElement).toBeNull();
  });

  it('should rise onChange event when something in filter changed', () => {

  });
});
