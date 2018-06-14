import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { TypeAheadDisplayComponent } from './type-ahead-display.component';
import { TypeAheadEventService } from '../../../services/events/type-ahead/type-ahead-event.service';
import { TypeAheadPersistService } from '../../../services/persist/type-ahead/type-ahead-persist.service';
import { TypeAheadDisplayModel } from '../../../models/type-ahead/type-ahead-display';

describe('TypeAheadDisplayComponent', () => {
  let component: TypeAheadDisplayComponent;
  let fixture: ComponentFixture<TypeAheadDisplayComponent>;
  let typeAheadEventService: TypeAheadEventService;
  let typeAheadPersistService: TypeAheadPersistService;
  let model: TypeAheadDisplayModel;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TypeAheadDisplayComponent
      ],
      providers:[
        TypeAheadEventService,
        TypeAheadPersistService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    typeAheadEventService = new TypeAheadEventService();
    typeAheadPersistService = new TypeAheadPersistService();
    component = new TypeAheadDisplayComponent(typeAheadEventService, typeAheadPersistService);
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should have company Name being returned for non person entities on change', () => {
    model = new TypeAheadDisplayModel();
    model.companyName = 'Company 1';

    expect(component['createDisplayNameForNonPerson'](model)).toBe(model.companyName);
  });

  it('Should be calling displayDataAs if null value but will just be called returning nothing', () => {
    expect(component['displayDataAs'](null)).toBeFalsy();
  });

  it('Should be checking that the userRoleType is defined when displayDataAs is called and displayData to be equal to the Model passed', () => {
    model = new TypeAheadDisplayModel();

    component['displayDataAs'](model);

    expect(component['userRoleType']).toBeDefined();
    expect(component['displayData']).toBe(model);
  });

  it('Should be checking when val.isPerson is true that this.appName, this.typeAheadName, and this.createDisplayAlias are either set or called', () => {
    model = new TypeAheadDisplayModel();
    model.isPerson = true;
    model.firstName = 'Mark';
    model.entityName = 'Hill';

    let spyDisplayName = spyOn<any>(component, 'createDisplayInAppName');
    let spyTyoeAheadName = spyOn<any>(component, 'createDisplayTypeAheadName');
    let spyAliasName = spyOn<any>(component, 'createDisplayAlias');
    component['displayDataAs'](model);
    expect(spyDisplayName).toHaveBeenCalled();
    expect(spyTyoeAheadName).toHaveBeenCalled();
    expect(spyAliasName).toHaveBeenCalled();
  });

  it('should be resetting the data when called', () => {
    component['clearTypeAheadValues']();
    expect(component['displayData']).toBeNull();
    expect(component.appName).toBeNull();
    expect(component.typeAheadName).toBeNull();
  });

  it('should create a proper display alias in the proper format', () => {
    let alias = 'Marko';
    component['createDisplayAlias'](alias);

    expect(component.appName).toContain(alias);
  });
  it(`should create`, async(inject([TypeAheadEventService,TypeAheadPersistService],
    ( typeAheadEventService :TypeAheadEventService,
      typeAheadPersistService : TypeAheadPersistService) => {
      expect(component).toBeTruthy();
  })));

  describe('createDisplayAlias method', () => {
    it('should be receiving an entityName string, adding "alias for" text to appName value', () => {
      model = new TypeAheadDisplayModel();
      model.primaryName = 'John John Doe & Misty Moore';
      component['createDisplayAlias'](model.primaryName);
      expect(component.appName).toContain('alias for');
    });

    it('method should be receiving an entityName string, adding it to appName value', () => {
      model = new TypeAheadDisplayModel();
      model.primaryName = 'John John Doe & Misty Moore';
      component['createDisplayAlias'](model.primaryName);
      expect(component.appName).toContain('John John Doe & Misty Moore');
    });

    it('method should be receiving an empty string, not adding "alias for" text to appName', () =>{
      component['createDisplayAlias']('');
      expect(component.appName).not.toContain('alias for');
    });
  })
});
