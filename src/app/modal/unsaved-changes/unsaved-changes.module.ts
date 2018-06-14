import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnsavedChangesComponent } from './unsaved-changes.component';
import { UnsavedChangesService } from '../../services/events/modal/unsaved-changes-event/unsaved-changes.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UnsavedChangesComponent],
  providers: [UnsavedChangesService],
  exports: [UnsavedChangesComponent]
})

export class UnsavedChangesModule { }
