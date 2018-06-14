import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef,
  HostListener,
  ViewContainerRef,
  OnDestroy
} from '@angular/core';
import {
  NgForm,
  FormGroup,
  FormControl,
  AbstractControl
} from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Subscription, Subscriber, Subject } from 'rxjs';
import { last } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { NgbTypeaheadConfig, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { TypeAheadService } from '../../../services/http/type-ahead/type-ahead.service';
import { TypeAheadModel } from '../../../models/type-ahead/type-ahead.model';
import { SearchMethodologies } from '../../../enums/queryParameters/search-methodologies.enum';
import { TypeAheadEventService } from '../../../services/events/type-ahead/type-ahead-event.service';
import { TypeAheadDisplayModel } from '../../../models/type-ahead/type-ahead-display';
import { AccentedLetters } from '../../../enums/characters/accented-letters.enum';
import { CharKeyCodes } from '../../../enums/characters/character-keycodes.enum';
import { LastCommaWins } from '../../../utils/formatting/last-comma-wins.format';
import { SpecialStrings } from '../../../enums/characters/special-strings.enum';
import { ToasterService } from '../../../services/toaster/toaster.service';
import { removeWhitespace } from '../../../utils/strings/remove-whitespace';
import { RadioButtonModel } from '../../../models/radio-button/radio-button.model';

@Component({
  selector: 'c2c-type-ahead-name-listing',
  templateUrl: './type-ahead-name-listing.component.html',
  styleUrls: ['./type-ahead-name-listing.component.scss'],
  providers: [TypeAheadService, NgbTypeaheadConfig, ToasterService, ToastsManager]
})

export class TypeAheadNameListingComponent implements OnDestroy {
  private typeAheadServiceData: any = [];
  private typeAheadChangeEvent: Subscription;
  private typeAheadNameList: Subscription;
  private _entryList: string = 'many';
  private _typeAheadListName: string;
  private _listName: string;
  private itemSelected: TypeAheadModel;
  private currentImteSelected: Subscription;

  @Input() public nonDuplicateRecordProperty: string;
  @Input() public akaProperty: string;
  @Input() public akaValue: string;
  @Input()
  set entryList(type: string) {this._entryList = type; }
  get entryList(): string { return this._entryList; }

  @Input()
  set listNameId(val: string) { this._listName = removeWhitespace(val); }
  get listNameId(): string { return this._listName; }

  @Input() public radioButton: boolean = true;
  @Input() public editButton: boolean = true;
  @Input() public removeButton: boolean = true;
  @Input() public typeList: string = 'listGroup';
  @Input() public selectFirstItem: boolean = false;
  @Input() public errorMsgItemSelectedRemoved: string = '';
  @Input() public errorMsgSelectItem: string = '';
  @Input() public showMsgForSelectingItem: boolean = false;
  @Input() public allowAKA: boolean = false;

  private disabledBtn: boolean = false;
  private selectNext = false;
  private errorMsg: string;

  constructor(private typeAheadEventService: TypeAheadEventService,
              private toasterService: ToasterService,
              private vcr: ViewContainerRef,
              private toaster: ToastsManager) {

    this.toaster.setRootViewContainerRef(vcr);
    this.subscribeToChangeEvent();

    // toggle subscription for lists events
    this.typeAheadEventService.getAddToListChanged().subscribe(item => {
      if (!item) {
        this.typeAheadChangeEvent.unsubscribe();
        //this.typeAheadNameList.unsubscribe();
       } else {
        this.subscribeToChangeEvent();
       }
    });
  };

  ngOnDestroy() {
    this.typeAheadChangeEvent.unsubscribe();
    this.typeAheadNameList.unsubscribe();
  }

  private subscribeToChangeEvent(): void {

    this.typeAheadNameList = this.typeAheadEventService.getlistNameIdEvent().subscribe(item => {
      this._typeAheadListName = item;
    });

    // listening for the change event
    this.typeAheadChangeEvent = this.typeAheadEventService.getTypeAheadChangeEvent().subscribe(item => {
      this.addRecordToList(item);
    });

  }

  /**
   * addRecordToList
   */
  public addRecordToList = (item) => {
    if (this._listName === this._typeAheadListName) {
      this.indexOfGivenRecordInTheList(item) === -1 ? this.pushItemIntoList(item) : this.showRecordExist();
    }
  }

  /**
   * indexOfGivenRecordInTheList
   */
  public indexOfGivenRecordInTheList = (rec): number => {
    let index = -1;
    if(!this.allowAKA){
      this.typeAheadServiceData.forEach((element, key) => {
        index = (index === -1 && element[this.nonDuplicateRecordProperty] === rec[this.nonDuplicateRecordProperty]) ? key : index;
      });
      this.errorMsg = 'The selected record already exists in the list.';
    } else{
      for(const item of this.typeAheadServiceData){
        if(item[this.nonDuplicateRecordProperty] === rec[this.nonDuplicateRecordProperty]) {
          console.log(item[this.nonDuplicateRecordProperty] + ' ' + rec[this.nonDuplicateRecordProperty]);
            this.typeAheadServiceData.forEach((element, key) => {
              index = (index === -1 && element[this.akaProperty] === rec[this.akaProperty]) ? key : index;
            });
            this.errorMsg = 'The selected record already exists in the list.';
            break;
          } else {
            index = 0;
            this.errorMsg = 'The selected record is not related to current item.';
          }
      }
    }

    return index;
  }
  /**
   * showRecordExist
   */
  public showRecordExist = () => {
    this.toasterService.info(this.errorMsg, 'Duplicate Record');
  }
  /**
   * deleteRecordFromList
   */
  public deleteRecordFromList = (item) => {
    this.typeAheadServiceData.splice(this.indexOfGivenRecordInTheList(item),1);
    this.typeAheadEventService.removeItemList(item);

    if(this.typeList === 'listInline' && this.typeAheadServiceData.length === 0){
      this.toasterService.info(this.errorMsgItemSelectedRemoved, 'Current Item is required');
      this.itemSelected = undefined;
      this.typeAheadEventService.currentItemSelected(this.itemSelected);
    } else if(this.typeList === 'listInline' && this.typeAheadServiceData.length > 0) {
      this.typeAheadEventService.currentItemSelected(this.typeAheadServiceData[0]);
    }
  }

  private pushItemIntoList(item): void {
    if ( (removeWhitespace(this._entryList) === 'one' && this.typeAheadServiceData.length === 0)
         || (removeWhitespace(this.entryList) === 'many')) {
      this.typeAheadServiceData.push(item);
      if(this.typeAheadServiceData.length === 1){
        item.selectedItemInList = true;
        this.typeAheadEventService.currentItemSelected(item);
      }
      if (this.selectFirstItem && this.typeList === 'listInline' && this.typeAheadServiceData.length === 1) {
        this.itemSelected = item;
      }
      if (this.typeList === 'listInline' && !this.itemSelected && this.showMsgForSelectingItem) {
        this.toasterService.info(this.errorMsgSelectItem, 'Current Item is required');
      }
    }
  }

  private currentItemSelected(evt: any): void {

    evt.selectedItemInList = true;
    if (this.itemSelected) {
      this.itemSelected.selectedItemInList = false;
    }
    this.itemSelected = evt;
    this.disabledBtn = true;
    this.typeAheadEventService.currentItemSelected(this.itemSelected);
  }
}
