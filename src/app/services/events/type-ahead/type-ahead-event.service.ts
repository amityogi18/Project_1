import { Injectable, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TypeAheadEventService {

  constructor() { }

  private _accentedCharacter            = new EventEmitter<string>();
  private _accentedCharacterReplacement = new EventEmitter<string>();
  private _clearFields                  = new EventEmitter<any>();
  private _displayDetailData            = new EventEmitter<any>();
  private _filterValuesChanged          = new EventEmitter<any>();
  private _noResults                    = new EventEmitter<any>();
  private _searchStatsChanged           = new EventEmitter<any>();
  private _typeAheadDataChanged         = new EventEmitter<any>();
  private _addToListChanged             = new EventEmitter<any>();
  private _listNameToAdd                = new EventEmitter<string>();
  private _curretnItemSelected          = new EventEmitter<any>();
  private _removeItemList               = new EventEmitter<any>();

  //when typeAhead selection changes
  public typeAheadChangeEvent(value:any) : void {
    this._typeAheadDataChanged.emit(value);
  };

 public getTypeAheadChangeEvent() : EventEmitter<any> {
    return this._typeAheadDataChanged;
  };

public addToListChangeEvent(addToList: boolean) : void {
  this._addToListChanged.emit(addToList);
}

public getAddToListChanged() : EventEmitter<any> {
  return this._addToListChanged;
}

  //when no results are found
  public typeAheadNoResults(value:any) : void {
    this._noResults.emit(value);
  }

  public getTypeAheadNoResults() : EventEmitter<any> {
    return this._noResults;
  }

  //typeAhead filter changes
  public typeAheadFilterValuesChanged(value:any) : void{
    this._filterValuesChanged.emit(value)
  }

  public getTypeAheadFilterValues() : EventEmitter<any> {
    return this._filterValuesChanged;
  }

  //clear fields
  public clearTypeAheadFields() : void {
    this._clearFields.emit();
  }

  public getClearTypeAheadFields() : EventEmitter<any> {
    return this._clearFields;
  }

  //typeahead search stats
  public searchStats(value:any) : void {
    this._searchStatsChanged.emit(value);
  }

  public getSearchStats() : EventEmitter<any> {
    return this._searchStatsChanged;
  }

  //display data for typeahead forms
  public displayData(value:any) : void {
    this._displayDetailData.emit(value);
  }

  public getDisplayData() : EventEmitter<any> {
    return this._displayDetailData;
  }

  //accented character for typeahead
  public openAccentedCharacterModal(value:string) : void {
    this._accentedCharacter.emit(value);
  }

  public getAccentedCharacters() : EventEmitter<string> {
    return this._accentedCharacter;
  }

  //replaces character with accented character
  public replaceWithAccentedCharacter(value:string) : void {
    this._accentedCharacterReplacement.emit(value);
  }

  public getAccentedCharacterReplacement() : EventEmitter<string> {
    return this._accentedCharacterReplacement;
  }

  public listNameToLook(value: string): void {
    this._listNameToAdd.emit(value);
  }

  public getlistNameIdEvent() : EventEmitter<string> {
    return this._listNameToAdd;
  }

  // when selecting inline-list radiobutton event
  public currentItemSelected(value: any): void {
    this._curretnItemSelected.emit(value);
  }

  public getCurrentItemSelectedt(): EventEmitter<any> {
    return this._curretnItemSelected;
  }
  // When removing item in list event
  public removeItemList(value: any): void {
    this._removeItemList.emit(value);
  }

  public getRemoveItemList(): EventEmitter<any> {
    return this._removeItemList;
  }
}
