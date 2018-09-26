import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CDCSearchInputComponent} from './search-input.component';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';


xdescribe('SelectSearchComponent', () => {
  let component: CDCSearchInputComponent;
  let fixture: ComponentFixture<CDCSearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ CDCSearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CDCSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show/hide clear button', () => {
    let debugElement = fixture.debugElement.query(By.css('.btn-default'));
    expect(debugElement).toBeNull();
    component.query = 'something';
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('.btn-default'));
    expect(debugElement).not.toBeNull();
  });

  it('should clear text and rise change when clear button clicked', () => {
    let query = 'something';
    component.change$.subscribe(newQuery => query = newQuery);
    component.query = 'something';
    fixture.detectChanges();
    const debugElement = fixture.debugElement.query(By.css('.btn-default'));
    debugElement.triggerEventHandler('click', 'click');
    fixture.detectChanges();
    expect(component.query).toEqual('');
    expect(query).toEqual('');
  });

  it('should remove small class');

  xit('should rise on change event when text input changed', done => {
    // let query = '';
    // component.onChange.subscribe(newQuery => query = newQuery);
    // const debugElement = fixture.debugElement.query(By.css('input'));
    // debugElement.nativeElement.value = 'something';
    // debugElement.nativeElement.dispatchEvent(new Event('input'));
    // fixture.detectChanges();
    // setTimeout(() => {
    //   expect(query).toEqual('something');
    //   done();
    // }, 600);
  });
});
