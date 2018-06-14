import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericDatepickerComponent } from './generic-datepicker.component';

describe('GenericDatepickerComponent', () => {
  let component: GenericDatepickerComponent;
  let fixture: ComponentFixture<GenericDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
