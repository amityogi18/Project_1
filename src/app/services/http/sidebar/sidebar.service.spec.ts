import { TestBed, inject } from '@angular/core/testing';

import { SidebarService } from './sidebar.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('SidebarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SidebarService]
    });
  });

  it('should be created', inject([SidebarService], (service: SidebarService) => {
    expect(service).toBeTruthy();
  }));

  it('should get correct response type', inject([SidebarService], (service: SidebarService) => {
    expect(typeof(service.getVersion('fc'))).toEqual('object');
  }));
});
