import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { ModalModule } from '../../modal/modal.module';
import { ModalComponent } from '../../modal/modal.component';
import { ToastOptions, ToastModule } from 'ng2-toastr/ng2-toastr';

import { NameSearchComponent} from './name-search.component';
import { TypeAheadModule } from '../elements/type-ahead/type-ahead.module';
import { TypeAheadDetailsComponent } from '../../forms/type-ahead/type-ahead-details/type-ahead-details-form.component';
import { TypeAheadFiltersFormComponent } from '../../forms/type-ahead/type-ahead-filters/type-ahead-filters-form.component';
import { TypeAheadModalComponent } from '../../forms/type-ahead/type-ahead-modal/type-ahead-modal.component';
import { TypeAheadDisplayComponent } from '../../forms/type-ahead/type-ahead-display/type-ahead-display.component';
import { TypeAheadPersistService } from '../../services/persist/type-ahead/type-ahead-persist.service';
import { TypeAheadEventService } from '../../services/events/type-ahead/type-ahead-event.service';
import { UrlResolverService } from '../../services/non-http-data/url-resolver.service';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import { NgbTypeaheadWindow } from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window';

import { AutofocusDirective } from '../../directives/focus/auto-focus.directive';
//import { SsnValidatorDirective } from '../../directives/ssn-validator/ssn-validator.directive';
import { EnterKeyClickDirective } from '../../directives/keyboard-events/enter-key-click.directive';
import { ControlSHotkeyDirective } from '../../directives/keyboard-events/ctrl-s.directive';

import { TypeAheadNameListingComponent } from '../elements/type-ahead-name-listing/type-ahead-name-listing.component';
import { ModalEventService } from '../../services/events/modal/modal-event.service';

import { ButtonModule } from '../elements/button/button.module';
import { FormModule } from '../form/form.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TypeAheadModule,
    ToastModule,
    ButtonModule,
    FormModule
    ],
  declarations: [
    AutofocusDirective,
    EnterKeyClickDirective,
    //SsnValidatorDirective,
    NameSearchComponent,
    TypeAheadDetailsComponent,
    TypeAheadFiltersFormComponent,
    TypeAheadModalComponent,
    TypeAheadDisplayComponent,
    ModalComponent,
    TypeAheadNameListingComponent,
    ControlSHotkeyDirective
    ],
    entryComponents:[ModalComponent, TypeAheadModalComponent, ModalComponent],
  exports : [
    NameSearchComponent
  ]
})
export class NameSearchModule {
  static forRoot():ModuleWithProviders{
    return {
      ngModule: NameSearchModule,
      providers: [TypeAheadEventService,
                  TypeAheadPersistService,
                  ToastOptions,
                  NgbModalStack,
                  NgbTypeaheadWindow,
                  UrlResolverService,
                  ModalEventService]
    }
  }
 }
