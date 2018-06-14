import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import { ModalEventService } from '../services/events/modal/modal-event.service';
import { TypeAheadEventService } from '../services/events/type-ahead/type-ahead-event.service';
import { CommonSharedModule } from '../../../public_api';

@NgModule({
  imports: [
    CommonModule,
    CommonSharedModule.forRoot()
  ],
  declarations: [ModalComponent],
  exports: [ModalComponent]
})
export class ModalModule {
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: ModalModule,
      providers: [TypeAheadEventService,
                  NgbModalStack,
                  ModalEventService]
    }
  }
}
