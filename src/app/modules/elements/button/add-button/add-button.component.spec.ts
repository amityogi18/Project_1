import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddButtonComponent } from './add-button.component';
import { GridEventService } from '../../../../services/events/grid/grid-event.service';
import { Router } from '@angular/router';

describe('AddButtonComponent', () => {
  let component: AddButtonComponent;
  let fixture: ComponentFixture<AddButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddButtonComponent ],
      providers: [Router, GridEventService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
