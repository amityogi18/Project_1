import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonSharedModule } from '../../../modules/common-shared/common-shared.module';
import { TypeAheadDisplayComponent } from '../../../forms/type-ahead/type-ahead-display/type-ahead-display.component';
import { TypeAheadEventService } from '../../../services/events/type-ahead/type-ahead-event.service';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import { ModalEventService } from '../../../services/events/modal/modal-event.service';
import { TypeAheadModalComponent } from '../../../forms/type-ahead/type-ahead-modal/type-ahead-modal.component';
import { TypeAheadModule } from '../../../modules/elements/type-ahead/type-ahead.module';

//import { SsnValidatorDirective } from '../../../directives/ssn-validator/ssn-validator.directive';
import { EnterKeyClickDirective } from '../../../directives/keyboard-events/enter-key-click.directive';
import { ToasterService } from '../../../services/toaster/toaster.service';
import { AddAliasService } from '../../../services/http/type-ahead/aka/add-alias.service';
import { ToastsManager } from 'ng2-toastr';
import { ToastOptions, ToastModule } from 'ng2-toastr/ng2-toastr';
import { TypeAheadPersistService } from '../../../services/persist/type-ahead/type-ahead-persist.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TypeAheadModule.forRoot(),
    ToastModule.forRoot(),
    CommonSharedModule.forRoot()
  ],
  declarations: [
    TypeAheadModalComponent,
    TypeAheadDisplayComponent,
    //SsnValidatorDirective,
    EnterKeyClickDirective
  ],
  exports: [TypeAheadModalComponent, TypeAheadDisplayComponent]
})
export class TypeAheadModalModule {
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: TypeAheadModalModule,
      providers: [TypeAheadEventService,
                  NgbModalStack,
                  ModalEventService,
                  TypeAheadPersistService]
    }
  }
}
