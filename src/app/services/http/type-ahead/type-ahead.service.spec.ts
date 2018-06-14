import { TestBed, inject } from '@angular/core/testing';

import { TypeAheadService } from './type-ahead.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TypeAheadEventService } from '../../../services/events/type-ahead/type-ahead-event.service';

describe('TypeAheadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        TypeAheadService,
        TypeAheadEventService
      ]
    });
  });

  // it('should be created', inject([HttpClient,TypeAheadEventService,TypeAheadService],
  //   (httpClient:HttpClient,typeAheadEventServiceTypeAheadEventService,service: TypeAheadService) => {
  //   expect(service).toBeTruthy();
  // }));
});
