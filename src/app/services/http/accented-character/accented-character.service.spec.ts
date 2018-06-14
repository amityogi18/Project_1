import { async, TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AccentedCharacterService } from './accented-character.service';
import { TypeAheadEventService } from '../../events/type-ahead/type-ahead-event.service';
import { UrlResolverService } from '../../non-http-data/url-resolver.service';

describe('AccentedCharacterService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
                  HttpClient,
                  HttpHandler,
                  TypeAheadEventService,
                  UrlResolverService,
                  AccentedCharacterService]
    });
  })
);

  // it('should be created', async(inject([HttpClient, TypeAheadEventService, UrlResolverService, AccentedCharacterService],
  //   ( httpClient: HttpClient,
  //     typeAheadEventService: TypeAheadEventService,
  //     urlResolverService: UrlResolverService,
  //     accentedService: AccentedCharacterService) => {
  //   expect(accentedService).toBeTruthy();
  // })));
});
