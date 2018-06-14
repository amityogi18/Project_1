import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { TypeAheadModalComponent } from './type-ahead-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TypeAheadEventService } from '@app/services/events/type-ahead/type-ahead-event.service';
import { TypeAheadService } from '@app/services/http/type-ahead/type-ahead.service';
import { ViewContainerRef, Renderer2 } from '@angular/core';
import { ToastsManager, ToastOptions } from 'ng2-toastr';
import { TypeAheadPersistService } from '@app/services/persist/type-ahead/type-ahead-persist.service';
import { ToasterService } from '@app/services/toaster/toaster.service';
import { AutofocusDirective } from '@app/directives/focus/auto-focus.directive';
import { TypeAheadDisplayComponent } from '@app/forms/type-ahead/type-ahead-display/type-ahead-display.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';

describe('TypeAheadModalComponent', () => {
  let component: TypeAheadModalComponent;
  let fixture: ComponentFixture<TypeAheadModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [
        TypeAheadModalComponent,
        AutofocusDirective,
        TypeAheadDisplayComponent
      ],
      providers:[
        NgbModal,
        TypeAheadEventService,
        TypeAheadService,
        ToastsManager,
        ViewContainerRef,
        ToasterService,
        TypeAheadPersistService,
        Renderer2,
        HttpClient,
        HttpHandler,
        ToastOptions,
        NgbModalStack
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAheadModalComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();

  });

  // it(`should create`, async(inject([NgbModal,
  //                                   TypeAheadEventService,
  //                                   TypeAheadService,
  //                                   ToastsManager,
  //                                   ViewContainerRef,
  //                                   ToasterService,
  //                                   TypeAheadPersistService,
  //                                   Renderer2],
  //   ( modalService            : NgbModal,
  //     typeAheadEventService   : TypeAheadEventService,
  //     typeAheadService        : TypeAheadService,
  //     toaster                 : ToastsManager,
  //     vcr                     : ViewContainerRef,
  //     toasterService          : ToasterService,
  //     typeAheadPersistService : TypeAheadPersistService,
  //     renderer                : Renderer2) => {
  //     expect(component).toBeTruthy();
  // })));
});
