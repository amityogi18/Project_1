import { TypeAheadDetailsComponent } from "@app/forms/type-ahead/type-ahead-details/type-ahead-details-form.component";
import { TypeAheadEventService } from "@app/services/events/type-ahead/type-ahead-event.service";
import { FormGroup } from "@angular/forms";

describe('TypeAheadDetailsComponent', () => {
  let component: TypeAheadDetailsComponent;
  let service: TypeAheadEventService;

  beforeEach(() => {
    service = new TypeAheadEventService();
    component = new TypeAheadDetailsComponent(service);
  });


});


