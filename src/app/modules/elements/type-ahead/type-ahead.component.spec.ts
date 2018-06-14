import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { TypeAheadComponent } from './type-ahead.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbTypeaheadConfig, NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TypeAheadEventService } from '../../../services/events/type-ahead/type-ahead-event.service';
import { Renderer2, DebugElement, ElementRef } from '@angular/core';
import { TypeAheadService } from '@app/services/http/type-ahead/type-ahead.service';
import { UrlResolverService } from '../../../services/non-http-data/url-resolver.service';
import { By } from '@angular/platform-browser';
import { TypeAheadModel } from '../../../../../public_api';
import { UserRole } from '@app/enums/entity/user-role.enum';
import { ExpectedConditions } from 'protractor';
import { TypeAheadDisplayModel } from '@app/models/type-ahead/type-ahead-display';
import { LastCommaWins } from '../../../utils/formatting/last-comma-wins.format';




describe('TypeAheadComponent', () => {
  let component: TypeAheadComponent;
  let fixture: ComponentFixture<TypeAheadComponent>;
  let addNameEl: any;
  let model: TypeAheadModel;
  let typeAheadEventService: TypeAheadEventService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule,
        NgbModule
      ],
      declarations: [
        TypeAheadComponent
       ],
       providers:[
         HttpClient,
         HttpHandler,
         TypeAheadService,
         TypeAheadEventService,
         NgbTypeaheadConfig,
         Renderer2,
         NgbTooltipConfig,
         UrlResolverService,
         LastCommaWins
        ]
    })
    .compileComponents();

    describe('this should return a string', () => {
      it('should be a string containing data results', () => {
        // can we test private methods?
      })
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAheadComponent);
    component = fixture.componentInstance;
    typeAheadEventService  = TestBed.get(TypeAheadEventService);
    fixture.detectChanges();
  });

  it(`should create`, async(inject([TypeAheadService,TypeAheadEventService,NgbTypeaheadConfig,Renderer2],
    ( typeAheadService      : TypeAheadService,
      typeAheadEventService : TypeAheadEventService,
      typeAheadConfig       : NgbTypeaheadConfig,
      renderer              : Renderer2) => {
      expect(component).toBeTruthy();
  })));


  describe('Add as New Button', () =>{
    it('should be showAddSameNameButton true to display "Add new Name" button', () => {
      expect(component.showAddSameNameButton).toBeTruthy();
    });

    it('should be a button with "Add as New" text', () => {
      addNameEl = fixture.debugElement.query(By.css('#addSameNameBtn'));

      expect(addNameEl.nativeElement.textContent).toContain('Add as New');
    });

    it('should be button "Add new Name" disabled', () => {
      addNameEl = fixture.debugElement.query(By.css('#addSameNameBtn')).nativeElement;

      expect(addNameEl.disabled).toBe(true);
    });
  })


  describe('Press enter Text/Label', () => {
    it('should have title prop "Press Enter" text contained', () => {
      expect(component.title).toContain('Press Enter');
    });

    it('should contain label "Press Enter" text contained', () => {
      const titleLabelEl = fixture.debugElement.query(By.css('label.d-inline')).nativeElement;

      expect(titleLabelEl.textContent).toContain('Press Enter');
    });
  });

  describe('Global icon button', () => {
    it('should be "Global icon" button disabled', () => {
      const globalIconEl = fixture.debugElement.query(By.css('button.fa-globe')).nativeElement;

      expect(globalIconEl.disabled).toBe(true);
    });
  });

  it('should be checking meta data array is empty and user role is defined', () => {
    model = new TypeAheadModel();

    component['displaySearchResultMetadata'](model);

    expect(component['metaDataArray'].length).toBeLessThan(1);
    expect(component['userRole']).toBeDefined();
  });

  it('should recieve displaySearchResultMetadata a TypeAheadModel to build metadata', () => {
    model = new TypeAheadModel();
    component['userRole'] = UserRole.BUSINESS_CREATIVE;

    const spyCheckNullEmptyMetaData = spyOn<any>(component, 'checkNullEmptyMetaData');
    const spyConcatMetaDataResult = spyOn<any>(component, 'concatMetaDataResult');
    component['displaySearchResultMetadata'](model);

    expect(spyCheckNullEmptyMetaData).toHaveBeenCalled();
    expect(spyConcatMetaDataResult).toHaveBeenCalled();
  });

  it('should be typeAhead field cleared', () => {
    component.clearTypeAheadField();

    expect(fixture.componentInstance.typeAheadField.nativeElement.value).toBe(' ');
  });

  it('should be open Add new Name modal', () => {

    let formInputTypeahead = component.typeAheadForm.controls.typeAheadField;
    formInputTypeahead.setValue('Tom Adams');
    fixture.detectChanges();

    const spyOpenadNameModal = spyOn(component, 'displayAddNameModel');
    component.addSameNameValues();

    expect(spyOpenadNameModal).toHaveBeenCalled();

  });

  it('should be open addName for searched text', () => {
    let displayData = new TypeAheadDisplayModel();
    component['hasData'] = false;
    component['searchTerm'] = 'Tom Adams';


    const spyLastCommaWins = spyOn(LastCommaWins, 'parseData');
    const spyclearTypeAheadField = spyOn(component, 'clearTypeAheadField');

    component.displayAddNameModel(component['searchTerm']);
    //displayData = LastCommaWins.parseData(component['searchTerm']);

    expect(component['hasData']).toBe(false);
    expect(spyLastCommaWins).toHaveBeenCalled();
    expect(spyLastCommaWins).toHaveBeenCalledWith(component['searchTerm']);
    expect(spyclearTypeAheadField).toHaveBeenCalled();

    // TODO: evalute displayDAta & evaluate hasNoResultsCallback @Input
  });

  it('should be opening  accented character modal', () => {
    component.accentedCharacter = 'a';

    const spytypeAheadEventService = spyOn(typeAheadEventService, 'openAccentedCharacterModal');
    component.openAccentedCharacterModal();
    expect(spytypeAheadEventService).toHaveBeenCalled();
    expect(spytypeAheadEventService).toHaveBeenCalledWith(component.accentedCharacter);

  });

  it('should be filter change values gets value', () => {
    const userRole =  'Casting';

    component['typeAheadFilterValuesChanged'](userRole);

    expect(component['userRole']).toBe(userRole);

  });

});
