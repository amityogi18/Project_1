import { TestBed, inject } from '@angular/core/testing';

import { AddAliasService } from './add-alias.service';

describe('AddAliasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddAliasService]
    });
  });

  // it('should be created', inject([AddAliasService], (service: AddAliasService) => {
  //   expect(service).toBeTruthy();
  // }));
});
