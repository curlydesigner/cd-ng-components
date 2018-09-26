import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurlyDesignerComponentsComponent } from './curly-designer-components.component';

describe('CurlyDesignerComponentsComponent', () => {
  let component: CurlyDesignerComponentsComponent;
  let fixture: ComponentFixture<CurlyDesignerComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurlyDesignerComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurlyDesignerComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
