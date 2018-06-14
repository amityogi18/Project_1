import { TestBed, inject } from '@angular/core/testing';

import { TypeAheadEventService } from './type-ahead-event.service';

describe('TypeAheadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeAheadEventService]
    });
  });

  it('should be created', inject([TypeAheadEventService], (service: TypeAheadEventService) => {
    expect(service).toBeTruthy();
  }));
});
