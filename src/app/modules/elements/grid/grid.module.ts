import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { AgGridModule } from 'ag-grid-angular/main';
import { GridEventService } from '../../../services/events/grid/grid-event.service';
import { ListComponent } from './custom-cells/list/list.component';
import { ListEditorComponent } from './custom-cells/list-editor/list-editor.component';
import { FormsModule } from '@angular/forms';
import { ImageComponent } from './custom-cells/image/image.component';
import { LinkComponent } from './custom-cells/link/link.component';
import { AddButtonComponent } from '../button/add-button/add-button.component';
import { RouterModule } from '@angular/router';
import { RefreshButtonComponent } from '../button/refresh-button/refresh-button.component';
import { TitlesComponent } from './custom-cells/titles/titles.component';
import { ColumnDefModel } from '../../../models/grid/column-def.model';
import { TitlesParamsModel } from '../../../models/grid/titles-params.model';
import { ListParamsModel } from '../../../models/grid/list-params.model';
import { ImageParamsModel } from '../../../models/grid/image-params.model';
import { ButtonModule } from '../../elements/button/button.module';
import { GridIconComponent } from './custom-cells/grid-icon/grid-icon.component';
import { GridLinkComponent } from './custom-cells/grid-link/grid-link.component';

/**
 * The GridModule
 *
 * Module that contains all Grid related components.
 * Add new Cell Renderers to the import 'AgGridModule.withComponents' array.
 */
@NgModule({
  declarations: [
    GridComponent,
    ImageComponent,
    LinkComponent,
    ListComponent,
    ListEditorComponent,
    TitlesComponent,
    GridIconComponent,
    GridLinkComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AgGridModule.withComponents([
      ImageComponent,
      LinkComponent,
      ListComponent,
      ListEditorComponent,
      TitlesComponent,
      GridIconComponent,
      GridLinkComponent
    ]),
    RouterModule,
    ButtonModule
  ],
  exports: [
    GridComponent
  ]
})
export class GridModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GridModule,
      providers: [GridEventService]
    };
  }
}
