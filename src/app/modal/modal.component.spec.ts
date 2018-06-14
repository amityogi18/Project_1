import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { AutofocusDirective } from '../directives/focus/auto-focus.directive';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import { TypeAheadEventService } from '../services/events/type-ahead/type-ahead-event.service';
import { AccentedCharacterService } from '../services/non-http-data/accented-character.service';
import { Renderer2 } from '@angular/core';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[NgbModule],
      declarations: [ ModalComponent,AutofocusDirective ],
      providers:[NgbModalStack,TypeAheadEventService,AccentedCharacterService,Renderer2]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it(`should create`, async(inject([NgbModal,TypeAheadEventService,AccentedCharacterService,Renderer2],
  //   ( modalService              : NgbModal,
  //     typeAheadEventService     : TypeAheadEventService,
  //     accentedCharacterService  : AccentedCharacterService,
  //     renderer                  : Renderer2) => {
  //     expect(component).toBeTruthy();
  // })));
});
