import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UrlResolverService } from '../../../services/non-http-data/url-resolver.service';
import { TypeAheadEventService } from '../../../services/events/type-ahead/type-ahead-event.service';
import { AccentedCharsModel } from '../../../models/accented-chars/accented-chars.model';

@Injectable()
export class AccentedCharacterService {

  constructor(private httpClient: HttpClient, private typeAheadEventService: TypeAheadEventService,
     private urlResolverService: UrlResolverService) { }

  /**
   * @param val the character in the type ahead behind the cursor that can be searched
   * @return array of foreign characters that will match the english character
   */
  public get(val: string): Observable<AccentedCharsModel[]> {
    val = val.toLowerCase();
    let params = new HttpParams();
        params = params.append('accentedChar', val);

    const url = this.urlResolverService.getServiceEndpointUrl('/getAccentedChars');

    return this.httpClient.get<AccentedCharsModel[]>(url, {params: params})
    .map((res: AccentedCharsModel[]) => this.mapData(res));
  }

  /**
     * Convert returned response data
     * @param res
     */
  private mapData(res: AccentedCharsModel[]): Array<AccentedCharsModel> {
    const nta = [];
    let obj = {};
    for (const o in res['type']) {
      if (o) {
        obj = new AccentedCharsModel(res['type'][o]);
        obj['heading'] = o;
        nta.push(obj);
        obj = {};
      }
    }
    return nta;
  };
}
