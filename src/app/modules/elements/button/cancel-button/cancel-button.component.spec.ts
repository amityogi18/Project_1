import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelButtonComponent } from './cancel-button.component';
import { GridEventService } from '../../../../services/events/grid/grid-event.service';
import { Router } from '@angular/router';

describe('AddButtonComponent', () => {
  let component: CancelButtonComponent;
  let fixture: ComponentFixture<CancelButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelButtonComponent ],
      providers: [Router, GridEventService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
