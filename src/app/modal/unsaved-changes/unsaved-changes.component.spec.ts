import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsavedChangesComponent } from './unsaved-changes.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';

describe('UnsavedChangesComponent', () => {
  let component: UnsavedChangesComponent;
  let fixture: ComponentFixture<UnsavedChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsavedChangesComponent ],
      providers: [NgbModal, NgbModalStack]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsavedChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
