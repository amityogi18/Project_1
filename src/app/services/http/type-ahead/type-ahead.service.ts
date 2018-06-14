import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { TypeAheadModel } from '../../../models/type-ahead/type-ahead.model';
import { SearchStats } from '../../../models/search-stats.model';
import { TypeAheadSaveModel } from '../../../models/type-ahead/type-ahead-save.model';
import { UrlResolverService } from '../../../services/non-http-data/url-resolver.service';

@Injectable()
export class TypeAheadService {

  constructor(private httpClient: HttpClient, private urlResolverService: UrlResolverService) { }

  /**
   * Records returned for typeahead search
   * @param textToBeSearched : search term
   * @param userRole : type of user
   * @param searchDataMethodology : CONTAINS or STARTS_WITH
   * @param noOfRecordsToBeReturned
   */
  public get(searchTerm: string, noOfRecordsToBeReturned: string, filterType?: string): Observable<TypeAheadModel[]> {

    //noOfRecordsToBeReturned = '10';

        let params = new HttpParams();
            params = params.append('textToBeSearched', searchTerm);
            params = params.append('noOfRecordsToBeReturned', noOfRecordsToBeReturned);
        params = filterType ? params.append('filterType', filterType) : params;

            if (filterType) {
              params = params.append('filterType', filterType);
            }

    const url = this.urlResolverService.getServiceEndpointUrl('/typeAheadNames');
    return this.httpClient.get<TypeAheadModel[]>(url,  {params: params})
        .map((res: TypeAheadModel[]) => this.mapData(res));
  };

    /**
     * Convert returned response data
     * @param res
     */
    private mapData(res: TypeAheadModel[]): Array<TypeAheadModel> {
        let nta: Array<TypeAheadModel> = [];
        nta = res['typeAheadNames'];

        return nta;
    };

    /**
   * Save for a new/edited name
   * @param tName JSON string of data
   */
  public save<T>(tName: string): Observable<T> {

    let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Accept', 'application/json');
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Access-Control-Allow-Origin', '*');
        headers = headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
        headers = headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');

        const url = this.urlResolverService.getServiceEndpointUrl('/addParty');

      return this.httpClient.post<T>(url, tName, { headers:headers })
      .map((res) => {
          return res as T;
      })
    };
}
