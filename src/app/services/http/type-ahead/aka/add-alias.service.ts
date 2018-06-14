import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UrlResolverService } from '../../../../services/non-http-data/url-resolver.service';

@Injectable()
export class AddAliasService {

  constructor(private httpClient : HttpClient, private urlResolverService: UrlResolverService) { }
  
  public save<T>(partyContract : any) : Observable<T> {

    const url = this.urlResolverService.getServiceEndpointUrl('/addAlias');

    let headers : HttpHeaders = new HttpHeaders();
        headers = headers.append('Accept', 'application/json');
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Access-Control-Allow-Origin', '*');
        headers = headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
        headers = headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');

      return this.httpClient.post<T>(url, partyContract, { headers:headers })
      .map((res) => {
          return res as T;
      })
    };

}
