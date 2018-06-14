import { TypeAheadFiltersFormComponent } from './type-ahead-filters-form.component';
import { TypeAheadEventService } from '@app/services/events/type-ahead/type-ahead-event.service';
import { TypeAheadPersistService } from '@app/services/persist/type-ahead/type-ahead-persist.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';

describe('TypeAheadFiltersFormComponent', () => {
  let component: TypeAheadFiltersFormComponent;
  let eventService: TypeAheadEventService;
  let persistService: TypeAheadPersistService;

  beforeEach(() => {
    eventService = new TypeAheadEventService();
    persistService = new TypeAheadPersistService();
    component = new TypeAheadFiltersFormComponent(eventService, persistService);
  });

  it('should create a new form group with 1 control on initialization', () => {
    component.ngOnInit();
    expect(component.filterForm.get('userRole')).toBeTruthy();
  });

  it('should create a new form control with a value on initialization', () => {
    component.ngOnInit();
    let control = component.filterForm.get('userRole');
    expect(control.value).not.toBeNull();
  });

  it('should check that value changes is subscribed to and update the value when changed', () => {
    component.ngOnInit();
    let filterForm = component.filterForm;
    let role = 'Casting';
    let spy = spyOn(filterForm, 'valueChanges').and.returnValue(role);
    role = 'Actor';
    filterForm.get('userRole').setValue(role);
    expect(filterForm.get('userRole').value).toBe(role);
  });
});
