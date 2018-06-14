import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SidebarModel } from '../../../models/sidebar/sidebar.model';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';

/**
 * The SidebarService
 *
 * Service class to provide data for the Sidebar.
 */
@Injectable()
export class SidebarService {

  /**
   * Constructor for the SidebarService
   *
   * @param http The HttpClient service.
   */
  constructor(private http: HttpClient) { }

  /**
   * Gets the current version of the maven and Jenkins build.
   *
   * @param module The module prefix.
   */
  public getVersion(module: string) {
    return this.http.get('./api/versionInfo')
    .map((res: any) => res);
  }
}
