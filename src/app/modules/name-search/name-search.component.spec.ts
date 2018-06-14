import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameSearchComponent } from './name-search.component';
import { TypeAheadFiltersFormComponent } from '../../forms/type-ahead/type-ahead-filters/type-ahead-filters-form.component';
import { TypeAheadComponent } from '../../modules/elements/type-ahead/type-ahead.component';
import { TypeAheadDetailsComponent } from '../../forms/type-ahead/type-ahead-details/type-ahead-details-form.component';
import { ModalComponent } from '../../modal/modal.component';
import { TypeAheadModalComponent } from '@app/forms/type-ahead/type-ahead-modal/type-ahead-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TypeAheadDisplayComponent } from '@app/forms/type-ahead/type-ahead-display/type-ahead-display.component';
import { AutofocusDirective } from '@app/directives/focus/auto-focus.directive';
import { TypeAheadEventService } from '@app/services/events/type-ahead/type-ahead-event.service';
import { TypeAheadPersistService } from '@app/services/persist/type-ahead/type-ahead-persist.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import { ToastOptions } from 'ng2-toastr';

describe('NameSearchComponent', () => {
  let component: NameSearchComponent;
  let fixture: ComponentFixture<NameSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule,
        NgbModule
      ],
      declarations: [
        NameSearchComponent,
        TypeAheadFiltersFormComponent,
        TypeAheadComponent,
        TypeAheadDetailsComponent,
        ModalComponent,
        TypeAheadModalComponent,
        TypeAheadDisplayComponent,
        AutofocusDirective
       ],
       providers:[
         TypeAheadEventService,
         TypeAheadPersistService,
         HttpClient,
         HttpHandler,
         NgbModalStack,
         ToastOptions
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
