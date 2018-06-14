import { TestBed, inject } from '@angular/core/testing';

import { TypeAheadPersistService } from './type-ahead-persist.service';

describe('TypeAheadPersistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeAheadPersistService]
    });
  });

  it('should be created', inject([TypeAheadPersistService], (service: TypeAheadPersistService) => {
    expect(service).toBeTruthy();
  }));
});
