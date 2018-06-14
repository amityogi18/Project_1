import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridComponent } from './grid.component';
import { ImageComponent } from './custom-cells/image/image.component';
import { LinkComponent } from './custom-cells/link/link.component';
import { ListComponent } from './custom-cells/list/list.component';
import { ListEditorComponent } from './custom-cells/list-editor/list-editor.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { GridEventService } from '../../../../app/services/events/grid/grid-event.service';
import { RowNode, GridApi } from 'ag-grid';
import { TitlesComponent } from './custom-cells/titles/titles.component';
import { AddButtonComponent } from '../button/add-button/add-button.component';
import { RefreshButtonComponent } from '../button/refresh-button/refresh-button.component';
import { UnsavedChangesComponent } from '../../../modal/unsaved-changes/unsaved-changes.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import { RouterTestingModule } from '@angular/router/testing';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;
  let expandEvent = {index: 0, state: true, image: false, field: 'test'};
  let expandEventData = ['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5', 'Value 6'];
  // let gridApiSpy: jasmine.SpyObj<GridApi>;

  beforeEach(async(() => {
    // const spy = jasmine.createSpyObj('GridApi', ['onRowHeightChanged']);

    TestBed.configureTestingModule({
      declarations: [
        AddButtonComponent,
        GridComponent,
        ImageComponent,
        LinkComponent,
        ListComponent,
        ListEditorComponent,
        RefreshButtonComponent,
        TitlesComponent,
        UnsavedChangesComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        AgGridModule.withComponents([
          ImageComponent,
          LinkComponent,
          ListComponent,
          ListEditorComponent,
          TitlesComponent
        ]),
        RouterTestingModule
      ],
      providers: [
        GridEventService,
        NgbModal,
        NgbModalStack
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   fixture.detectChanges();
  //   expect(component).toBeTruthy();
  // });

  // it('grid API is not available', () => {
  //   expect(component.gridApi).not.toBeTruthy();
  // });

  // it('grid API is available on `detectChanges`', () => {
  //   fixture.detectChanges();
  //   expect(component.gridApi).toBeTruthy();
  // });

  // it('should return default height', () => {
  //   const height = component.calcHeight(expandEvent, expandEventData);
  //   expect(height).toEqual(70);
  // });

  // it('should return expanded height', () => {
  //   expandEvent.state = false;
  //   const height = component.calcHeight(expandEvent, expandEventData);
  //   expect(height).toEqual(130);
  // });

  // it('should return image height', () => {
  //   expandEvent.image = true;
  //   expandEvent.state = true;
  //   const height = component.calcHeight(expandEvent, expandEventData);
  //   expect(height).toEqual(110);
  // });

  // it('should set the row height', () => {
  //   // let currentRow = new RowNode();
  //   // currentRow.setRowHeight(70);
  //   fixture.detectChanges();
  //   component.setRowHeight(expandEvent);
  //   expect(gridApiSpy.onRowHeightChanged.calls.count())
  //     .toBe(1, 'spy method was called once');
  // });
});
