import { Injectable } from '@angular/core';

@Injectable()
export class TypeAheadPersistService {

  /**
   * userRole is needed for the filtering of the typeAhead
   */
  private _userRole : string = '';

  getUserRole() : string {
    return this._userRole;
  };

  setUserRole(val : string) {
    this._userRole = val;
  };

}
