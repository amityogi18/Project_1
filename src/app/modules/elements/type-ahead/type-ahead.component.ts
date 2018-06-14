
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef,
  QueryList,
  forwardRef
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  AbstractControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Subscription} from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';
import { NgbTypeaheadConfig, NgbTypeahead, NgbHighlight } from '@ng-bootstrap/ng-bootstrap';
import { TypeAheadModel } from '../../../models/type-ahead/type-ahead.model';
import { TypeAheadEventService } from '../../../services/events/type-ahead/type-ahead-event.service';
import { TypeAheadDisplayModel } from '../../../models/type-ahead/type-ahead-display';
import { AccentedLetters } from '../../../enums/characters/accented-letters.enum';
import { CharKeyCodes } from '../../../enums/characters/character-keycodes.enum';
import { LastCommaWins } from '../../../utils/formatting/last-comma-wins.format';
import { formatSSN } from '../../../utils/formatting/ssn.format';
import { UserRole } from '../../../enums/entity/user-role.enum';
import { SpecialStrings } from '../../../enums/characters/special-strings.enum';
import { removeWhitespace } from '../../../utils/strings/remove-whitespace';
import { GenericModalComponent } from '../generic-modal/generic-modal.component';

const _placeHolderText: string = 'Default Placeholder Text';
const _title: string = 'Default Title';

@Component({
  selector: 'c2c-type-ahead',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.scss'],
  providers: [NgbTypeaheadConfig,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TypeAheadComponent),
      multi: true
    }]
})

export class TypeAheadComponent implements OnInit, ControlValueAccessor {

  private _accentedCharacter: string;
  //private _addToList: boolean = true;
  private _customModal: GenericModalComponent;
  private _listName: string;
  private _filterType: string;
  //private _hasNoResultsCallback: boolean;
  //private _showTitle: boolean = true;
  //private _disabledTypeAhead: boolean = false;
  //private _htmlTitle: boolean = false;
  public _value: any;
  private searchTerm: string;
  @Input() public columnDataAddOns: string;
  @Input() public displayColumns: Array<string>;
  @Input() public typeAheadModelParams: any;
  @Input() public metaData: object;
  @Input() public noOfRecordsToReturn: string = '10';
  @Input() public parentModule: string;
  @Input() public placeholderText: string = _placeHolderText;
  @Input() public primaryDisplayColumn: string;
  @Input() public secondaryDisplayColumn: string;
  @Input() public secondaryColumnString: string;
  @Input() public selectSingleRecord: boolean;
  @Input() public service: any;
  @Input() public title: string = _title;
  @Input() public toggleAccentedCharacterIcon: boolean = false;
  @Input() public toggleAddNameModal: boolean;
  @Input() public toggleAddSameNameButton: boolean = false;
  @Input() public toggleClearButton: boolean = false;
  @Input() public toggleCustomModal: boolean = false;
  @Input() public toggleSecondaryDisplay: boolean = false;
  @Input() public toggleTitle: boolean = false;
  @Input() public addToList: boolean;
  @Input() public customModal: GenericModalComponent;
  @Input() public filterType: string;
  @Input() public showTitle: boolean;
  @Input() public hasNoResultsCallback: boolean;
  @Input() public disabledTypeAhead: boolean;
  @Input() public htmlTitle: boolean;

  // @Input()
  // set addToList(val: boolean) { this._addToList = val; }
  // get addToList(): boolean { return this._addToList; }

  // @Input()
  // set customModal(val: GenericModalComponent) { this._customModal = val; }
  // get customModal(): GenericModalComponent { return this._customModal; }

  // @Input()
  // set filterType(type: string) { this._filterType = type; }
  // get filterType(): string { return this._filterType; }

  @Input()
  set listName(val: string) { this._listName = removeWhitespace(val); }
  get listName(): string { return this._listName; }


  // @Input()
  // set showTitle(val: boolean) { this._showTitle = val; }
  // get showTitle(): boolean { return this._showTitle; }

  // @Input()
  // set hasNoResultsCallback(val: boolean) { this._hasNoResultsCallback = val; }
  // get hasNoResultsCallback(): boolean { return this._hasNoResultsCallback; }

  // @Input()
  // set disabledTypeAhead(val: boolean) { this._disabledTypeAhead = val; }
  // get disabledTypeAhead(): boolean { return this._disabledTypeAhead; }

  // @Input()
  // set htmlTitle(val: boolean) { this._htmlTitle = val; }
  // get htmlTitle(): boolean { return this._htmlTitle; }

  @Output() public accentedCharacterReturned: EventEmitter<any> = new EventEmitter();
  @Output() public noSearchResultsReturned: EventEmitter<TypeAheadDisplayModel> = new EventEmitter();
  @Output() public selectedTypeAheadRecord: EventEmitter<TypeAheadModel> = new EventEmitter();
  @Output() public typeAheadReturnResults: EventEmitter<any> = new EventEmitter();
  @Output() public clearFields: EventEmitter<any> = new EventEmitter();

  @ViewChild('typeAheadField') public typeAheadField: ElementRef;
  @ViewChild('rt') public rt: QueryList<ElementRef>;

  public get accentedCharacter(): string {
    return this._accentedCharacter;
  }

  public set accentedCharacter(val: string) {
    this._accentedCharacter = val;
  }

  /** Getter for the value property */
  public get value(): any {
    return this._value;
  }

  /** Setter for the value property */
  public set value(val: any) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  public displayResultsToShow: any;
  public enableFirstSFocus: boolean = true;
  private hasData: boolean = false;
  private hasAccentedCharacters: boolean;
  private typeAheadResultsReturned: boolean;
  public searching: boolean = false;
  public searchFailed: boolean = false;
  private debounceTime: number = 0;
  public typeAheadFocusSubject: Subject<string> = new Subject<string>();
  private accentedCharacterSubscription: Subscription;
  private filterSubscription: Subscription;
  public typeAheadForm: FormGroup;
  private typeAheadSearchData: Array<any>; // returned data from service, converted observable object to array
  private userRole: string = '';
  private metaDataArray: Array<string> = [];
  private buttons: QueryList<ElementRef>;
  private buttonsIdx: number = 0;
  private buttonsIdxCheck: boolean = false;
  // function to convert a given value into a string to display in the input field
  public formatter: object = (x: { typeAheadDisplayName: string }) => x.typeAheadDisplayName;

  private hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

  constructor(
    private typeAheadEventService: TypeAheadEventService,
    private typeAheadConfig: NgbTypeaheadConfig,
    private renderer: Renderer2,
    private elem: ElementRef) {

    typeAheadConfig.showHint = true;

    this.filterSubscription = this.typeAheadEventService.getTypeAheadFilterValues()
      .subscribe(item => {
        this.typeAheadFilterValuesChanged(item);
      });

    this.accentedCharacterSubscription = this.typeAheadEventService.getAccentedCharacterReplacement()
      .subscribe(item => this.charToForeignChar(item));

  };

// nameSearch populates the typeAhead results
  public nameSearch: object = (text: Observable<string>) => text
    .debounceTime(this.debounceTime)
    .merge(this.typeAheadFocusSubject.filter((): boolean => {
      return (this.typeAheadField.nativeElement.value.trim() !== SpecialStrings.EMPTY ||
              this.typeAheadField.nativeElement.value.trim() !== SpecialStrings.EMPTY_OPEN);
    }))// when focused and value exists
    .distinctUntilChanged()
    .do(() => this.searching = true)
    .switchMap(term => this.mapTerm(term)
      .do(txt => this.searchFailed = false)
      .catch(() => {
        // if there's an error in the search
        this.searchFailed = true;
        return of([]);
      })
    )
    .do(() => {
      return this.searching = false;
    })
    .merge(this.hideSearchingWhenUnsubscribed)

  private mapTerm<T>(term: string): Observable<T[]> {
    this.searchTerm = term;

    if (term.trim() === SpecialStrings.EMPTY || term.trim() === SpecialStrings.EMPTY_OPEN) {
      this.typeAheadField.nativeElement.focus();
      return of([]);
    }

    // service passed in to @Input() service
    return this.service.get(this.searchTerm, String(this.noOfRecordsToReturn), this._filterType)
      .map(res => {
        return this.searchResults(res);
      });
  }

  ngOnInit() {
    this.typeAheadForm = new FormGroup({
      typeAheadField: new FormControl()
    });

    this.typeAheadField.nativeElement.focus();

    if (this.disabledTypeAhead) {
      this.typeAheadForm.controls.typeAheadField.disable();
    }

    this.onChange();
  }

 /** Fired when any changes to the model are detected */
 public onChange: any = () => {
  const typeAheadField: AbstractControl = this.typeAheadForm.controls.typeAheadField;

    // listen for typeAhead changes
    typeAheadField.valueChanges.subscribe(val => {

      this.checkForAccentedLetters(val);
      this.hasData = typeAheadField.value !== '';

    });
  };

 /** Fired when the component is blurred. TODO: This currently doesn't work - need to figure out why and fix it */
 public onTouched: any = () => { };

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabledTypeAhead = isDisabled;
  }

  public displayTypeAheadResults<T>(results: T): T {
    // set the object of returned data
    this.displayResultsToShow = results;

    // return the value to display in typeAhead results

    return this.displayResultsToShow[this.primaryDisplayColumn];
  }

  public onKeyUp(evt: KeyboardEvent): void {

    if (this.typeAheadResultsReturned === undefined || this.searchTerm.trim() === SpecialStrings.EMPTY) {
      return;
    }

    if (evt.keyCode === CharKeyCodes.LEFT_ARROW || evt.keyCode === CharKeyCodes.UP_ARROW ||
        evt.keyCode === CharKeyCodes.RIGHT_ARROW || evt.keyCode === CharKeyCodes.DOWN_ARROW) {
        this.checkForAccentedLetters(this.typeAheadField.nativeElement.value);
    }

      if (evt.keyCode === CharKeyCodes.ENTER && this.typeAheadField.nativeElement.value.length) {
        console.log(this.typeAheadResultsReturned);
        if (this.typeAheadResultsReturned) {
          evt.preventDefault();
          if (!this.hasNoResultsCallback) {
            this.typeAheadEventService.listNameToLook(this.listName);
          }
        } else {
          this.displayAddNameModal(this.typeAheadField.nativeElement.value);
        }
     }
  };

  public onMouseUp(evt: MouseEvent): void {
    this.checkForAccentedLetters(this.typeAheadField.nativeElement.value);

  }
  private typeAheadFilterValuesChanged(item: any): void {

    // TODO: needed to come back and update user Role assigment.
    this.userRole = item.userRole || item;
  };

  // open addName for searched text.
  public displayAddNameModal(seachedValue: string): void {

    if (!this.toggleAddNameModal && this.toggleCustomModal) {
      this._customModal.open();
      return;
    }

    this.hasData = false;
    let displayData: TypeAheadDisplayModel = new TypeAheadDisplayModel();
    displayData = LastCommaWins.parseData(seachedValue);
    this.typeAheadField.nativeElement.blur();
    this.clearTypeAheadField();

    if (this.hasNoResultsCallback) {
      this.noSearchResultsReturned.emit(displayData);
    } else {
      this.typeAheadEventService.listNameToLook(this.listName);
      this.typeAheadEventService.typeAheadNoResults(displayData);
    }
  };

  // emit selected event and pass the selected object+
  /**
   * NOTE: May need to look at updating this funtion for highlight use
   */
  private selectedItem(evt: Event): void {

    evt.preventDefault();
    this.clearTypeAheadField();
    this.hasData = true;
    this.value = evt['item'];

    // selecting a single record, update typeAhead field with selected value
    if (this.selectSingleRecord) {
        this.typeAheadForm.get('typeAheadField').setValue(this.value);
      return;
    }

    try {
      // emit service event that will be listened by other components
      this.selectedTypeAheadRecord.emit(this.value);

      if (!this.hasNoResultsCallback) {
        this.typeAheadEventService.listNameToLook(this.listName);
      }

      this.typeAheadEventService.typeAheadChangeEvent(this.value);
    } catch (err) {
      throw err;
    } finally {
      this.typeAheadForm.reset();
      this.clearTypeAheadField();
    }

  };

  private searchResults<T>(resArr: Array<T>): Array<T> {
    if (resArr.length === 0) {
      console.log(resArr);
      this.typeAheadResultsReturned = false;
    } else {

      if (this.metaData) {
        this.displayResultsToShow = resArr.map(res => this.displaySearchResultMetadata(res));
      }
      this.typeAheadSearchData = resArr;
      this.typeAheadResultsReturned = true;
      this.typeAheadReturnResults.emit(resArr);
      return resArr;
    }
  };


  // watch for letters that have accented characters
  private checkForAccentedLetters(val: string): void {

    const currPos = this.typeAheadField.nativeElement.selectionEnd;
    this.hasAccentedCharacters = false;

    if (!val || typeof val !== 'string') {
      return;
    }

    const currChar: string = val.charAt(currPos -1);

    for (const char in AccentedLetters) {
      if (!Number(char) && char === currChar.toUpperCase()) {
        this.hasAccentedCharacters = true;
        this.accentedCharacter = char;
        break;
      } else {
        this.hasAccentedCharacters = false;
        this.accentedCharacter = null;
      }
    }

  };

  public clearTypeAheadValues(evt?: MouseEvent, clearnBtn?: HTMLElement): void {
    if (evt) {
      evt.preventDefault();
    }
   setTimeout(() => {

      this.clearFields.emit();
      this.clearTypeAheadField();
      this.typeAheadEventService.clearTypeAheadFields();
      this.typeAheadForm.get('typeAheadField').setValue(SpecialStrings.EMPTY);
      this.hasData = false;
      console.log('Cleaning typeAhead Box');
    }, 1);
  };

  // add searched Name again.
  public addSameNameValues(): void {
    this.displayAddNameModal(this.typeAheadField.nativeElement.value);
  };

  public clearTypeAheadField(): void {
    this.typeAheadField.nativeElement.value = SpecialStrings.EMPTY_OPEN;
    this.typeAheadField.nativeElement.focus();
  };

  public openAccentedCharacterModal(): void {
    this.typeAheadEventService.openAccentedCharacterModal(this.accentedCharacter);
  };

  // replaces the last character of the typeAhead with an accented character, if applicaple
  private charToForeignChar(val: string): void {
    const currPos = this.typeAheadField.nativeElement.selectionStart;
    const typeAheadVal: string = this.typeAheadField.nativeElement.value;
    const updatedVal: string = typeAheadVal.substr(0, currPos-1) + val + typeAheadVal.substr(currPos);

    this.accentedCharacterReturned.emit(val);

    this.typeAheadField.nativeElement.value = updatedVal;
    this.typeAheadField.nativeElement.focus();
    this.typeAheadField.nativeElement.setSelectionRange(currPos, currPos);

    // after updating standard character with an accented one, reset
    // to false, so we can immediately run another typeAhead search
    // this.typeAheadResultsReturned = false;
    this.nameSearch = Observable.of(updatedVal);
  };

  // set metada to display in search result based on user role
  private displaySearchResultMetadata<T>(user: T): T {
    this.metaDataArray = [];
    switch (this.userRole) {
      case UserRole.BUSINESS_CREATIVE: {
        this.checkNullEmptyMetaData(user[this.metaData['BUSINESS_CREATIVE'][0]], false);
        this.checkNullEmptyMetaData(user[this.metaData['BUSINESS_CREATIVE'][1]], false);
        break;
      }
      case UserRole.PRODUCTION: {
        this.checkNullEmptyMetaData(user[this.metaData['PRODUCTION'][0]], false);
        this.checkNullEmptyMetaData(user[this.metaData['PRODUCTION'][1]], true);
        break;
      }
      case UserRole.CASTING: {
        this.checkNullEmptyMetaData(user[this.metaData['CASTING'][0]], false);
        this.checkNullEmptyMetaData(user[this.metaData['CASTING'][1]], true);

        break;
      }
      default: {
        this.checkNullEmptyMetaData(user[this.metaData['default'][0]], false);
        this.checkNullEmptyMetaData(user[this.metaData['default'][1]], true);
        break;
      }
    }
    user['metaData'] = this.concatMetaDataResult();
    return user;
  }

  private checkNullEmptyMetaData(value: string, ssn: boolean): void {
    let metaString: string;
    metaString = value ? `${value} ` : SpecialStrings.EMPTY;
    if (ssn && metaString) {
      metaString = formatSSN(metaString, true);
    }
    if (metaString) {
      metaString = ` | ${metaString}`;
    }
    if (metaString) {
      this.metaDataArray.push(metaString);
    }
  }

  private concatMetaDataResult(): string {
    let metaData: string = SpecialStrings.EMPTY;
    this.metaDataArray.forEach((value, index) => {
      metaData = `${metaData}${value}`;
    });
    return metaData;
  };

  private setFieldFocus(ele:ElementRef) {
    if (!ele) {
      return;
    }

    ele.nativeElement.focus();
  };
}
