import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericModalComponent } from './generic-modal.component';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import { ModalEventService } from '../../../services/events/modal/modal-event.service';
import { TypeAheadEventService } from '../../../services/events/type-ahead/type-ahead-event.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [GenericModalComponent],
  exports: [GenericModalComponent]
})
export class GenericModalModule {
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: GenericModalModule,
      providers: [TypeAheadEventService,
                  NgbModalStack,
                  ModalEventService]
    }
  }
 }
