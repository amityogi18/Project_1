import {
  Component, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewChildren, EventEmitter,
  QueryList, Renderer2, ElementRef, HostListener, Input, OnDestroy, AfterViewInit, Output,
} from '@angular/core';

import { NgForm, FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, PatternValidator } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModalRef, NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { take } from 'rxjs/operator/take';
import { Subscription } from 'rxjs/Subscription';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { ToasterService } from '../../../services/toaster/toaster.service';
import { TypeAheadSaveModel } from '../../../models/type-ahead/type-ahead-save.model';
import { AddAliasService } from '../../../services/http/type-ahead/aka/add-alias.service';
import { TypeAheadService } from '../../../services/http/type-ahead/type-ahead.service';
import { TypeAheadEventService } from '../../../services/events/type-ahead/type-ahead-event.service';
import { TypeAheadDisplayModel } from '../../../models/type-ahead/type-ahead-display';
import { TypeAheadPersistService } from '../../../services/persist/type-ahead/type-ahead-persist.service';
import { EmptyIfNull } from '../../../utils/strings/empty-if-null';
import { CharKeyCodes } from '../../../enums/characters/character-keycodes.enum';
import { TypeAheadModel } from '../../../models/type-ahead/type-ahead.model';
import { AddAliasModel } from '../../../models/type-ahead/aka/add-alias.model';

import { EntityTypes } from '../../../enums/entity/entity-types.enum';
import { AddAliasAKAModel } from '../../../models/type-ahead/aka/add-alias-aka.model';
import { ModalEventService } from '../../../services/events/modal/modal-event.service';
import { concatMap } from 'rxjs/operator/concatMap';

const occupationsConst: Array<string> = ['Actor', 'Director', 'Producer', 'Writer'];
const occupationDefault: string = occupationsConst[0];
const _title: string = 'Default Modal Title';
const _label: string = 'Entered name does not exist, would you like to add this name?';
const _showAddAlias: boolean = true;
const _displayNameAs: boolean = true;
const _additionFieldsDisplayed: boolean = true;

@Component({
  selector: 'c2c-type-ahead-modal',
  templateUrl: './type-ahead-modal.component.html',
  styleUrls: ['./type-ahead-modal.component.scss'],
  providers: [TypeAheadService, ToastsManager, ToasterService, AddAliasService]
})

export class TypeAheadModalComponent implements OnInit, AfterViewInit, OnDestroy {

  public isModalOpen: boolean = false;
  public isSaving: boolean;
  public showAliasCurrentName: boolean;
  public showAddName: boolean = true;
  public showAlias: boolean;
  public showCloseMessage: boolean;
  public showCurrentNameError: boolean;
  public ssnHasErrors: boolean;
  public roleIsPerson: boolean = true;
  public disabledTypeAhead: boolean = false;

  public appName: string = '';
  public typeAheadName: string = '';
  private bsModalCloseResult: string;
  private userRoleType: string;

  public ssnMaxLength: number = 11;

  public addTalentForm: FormGroup;
  private bsModal: NgbModalRef;
  private noResultsSubscription: Subscription;

  public occupations: Array<string> = occupationsConst;
  public noResultsValues: TypeAheadModel;
  protected selectedTypeAheadRecord: TypeAheadModel;
  public typeAheadDataService: any;
  private _fullRecordRouterLink: string;

  public currentDisplayData: TypeAheadDisplayModel;

  private modalTypeAheaRef: ElementRef;
  @ViewChild('modalTypeAhead') modalTypeAhead: ElementRef;
  @ViewChild('submitBtn') submitBtn: ElementRef;
  @ViewChild('aliasentityName') aliasentityName: ElementRef;
  @ViewChild('ssn') ssnField: ElementRef;
  private entityNameRef: ElementRef;
  @ViewChildren('entityName') public formViewChildren: QueryList<ElementRef>;
  @ViewChild('addTalentModal') noResultsForm: TemplateRef<any>;

  @Input() public typeAheadModalConfig: Object = {
    title: _title,
    label: _label,
    showAddAlias: _showAddAlias,
    displayNameAs: _displayNameAs,
    additionalFieldsDisplayed: _additionFieldsDisplayed
  };

  @Input() public typeAheadModalService: any;

  @Input()
  set fullRecordRouterLink(val: string) { this._fullRecordRouterLink = val; }
  get fullRecordRouterLink(): string { return this._fullRecordRouterLink; }

  private _checkAsAlias: boolean = false;
  @Input()
  set checkAddAsAlias(val: boolean) { this._checkAsAlias = val; }
  get checkAddAsAlias(): boolean { return this._checkAsAlias; }

  @Input() public fullRecordParams: string;

  private aliasSelecteData: any;

  constructor(private modalService: NgbModal,
              private typeAheadEventService: TypeAheadEventService,
              protected typeAheadService: TypeAheadService,
              private toaster: ToastsManager,
              private vcr: ViewContainerRef,
              protected toasterService: ToasterService,
              private typeAheadPersistService: TypeAheadPersistService,
              private renderer: Renderer2,
              protected addAliasService: AddAliasService,
              private modalEventService: ModalEventService,
              private router: Router) {

    this.noResultsSubscription = this.typeAheadEventService.getTypeAheadNoResults()
      .subscribe(item => this.typeAheadNoResultsFound(item));

    this.toaster.setRootViewContainerRef(vcr);
  }

  public metaData: object = {
    BUSINESS_CREATIVE: ['occupation', 'agency'],
    PRODUCTION: ['occupation', 'ssnEndChars'],
    CASTING: ['agency', 'ssnEndChars'],
    default: ['occupation', 'ssnEndChars']

  }


  ngAfterViewInit() {
    this.formViewChildren.changes.subscribe((child: QueryList<any>) => {
      this.entityNameRef = child.first;
    });

    this.typeAheadEventService.getCurrentItemSelectedt().subscribe(item => {
      this.aliasSelecteData = item;
      if(this.aliasSelecteData) {
        this.disabledTypeAhead = true;
      } else {
        this.disabledTypeAhead = false;
      }
    });
  }

  ngOnInit() {

    // service needed for typeAhead data
    this.typeAheadDataService = this.typeAheadService;

    this.addTalentForm = new FormGroup({
      dropdowns: new FormGroup({
        occupation: new FormControl(occupationDefault)
      }),
      aliasCheckbox: new FormControl(false),
      editableFields: new FormGroup({
        ssn: new FormControl(null,{
          validators: [Validators.pattern(/^\d{3}-?\d{2}-?\d{4}$/)],
          updateOn: 'change'
        }),
        firstName: new FormControl(null),
        entityName: new FormControl(null, Validators.required),
        companyName: new FormControl(null),
        middleName: new FormControl(null),
        suffix: new FormControl(null)
      }),
      aliasFields: new FormGroup({
        aliasFirstName: new FormControl(null),
        aliasentityName: new FormControl(null),
        aliasMiddleName: new FormControl(null),
        aliasSuffix: new FormControl(null)
      })
    });
    this.onChanges();
  };

  ngOnDestroy() {
    this.noResultsSubscription.unsubscribe();
  };

  // no results from the typeAhead search. Emitted event comes from typeAhead component class
  public noTypeAheadResultsFromMainForm(val: TypeAheadDisplayModel) {
    this.showAliasCurrentName = true;
    setTimeout(() => {
      // have to do this to get the reference
      this.setFieldFocus(this.entityNameRef);

      const noResultsFromAliasSearch: TypeAheadModel = new TypeAheadModel();
            noResultsFromAliasSearch.entityName = val.entityName;
            noResultsFromAliasSearch.firstName = val.firstName;
            noResultsFromAliasSearch.middleName = val.middleName;
            noResultsFromAliasSearch.suffix = val.suffix;

      this.addTalentForm.controls.editableFields['controls'].ssn.enable();
      this.addTalentForm.controls.dropdowns.get('occupation').enable();
      this.updateAddNameFields(noResultsFromAliasSearch);
    }, 100);
  };

  public enterKey(evt: KeyboardEvent): void {
    if (evt.keyCode !== CharKeyCodes.ENTER) {
      return;
    }
    this.save(evt);
  }

  public save(evt: Event): void {
    if (this.addTalentForm.invalid || this.isSaving) {
      if (this.showAlias && (this.addTalentForm.controls.editableFields['controls'].entityName.invalid
          || this.addTalentForm.controls.aliasFields['controls'].aliasentityName.invalid) ) {

          this.showCurrentNameError =  true ;
          setTimeout(() => {
            this.setFieldFocus(this.entityNameRef);
          }, 100);
          return;
      } else {
        return;
      }
    }

    this.showCurrentNameError = false;
    this.saveData(this.addTalentForm.value, this.showAlias);
    this.addTalentForm.disable();
    this.isSaving = true;
  };

  public closeModal() {
    this.resetForm();
    this.bsModal.dismiss('close');
    this.renderer.selectRootElement('#typeAheadField').focus();
    this.renderer.selectRootElement('#typeAheadField').value = '';
  };

  public openCloseConfirmation() {
    // this.showCloseMessage = !this.addTalentForm.pristine || this.addTalentForm.dirty;
    this.showCloseMessage = this.addTalentForm.dirty;

    if (!this.showCloseMessage) {
      this.resetForm();
      this.closeModal();
    }
  };

  public closeConfirmationYes() {
    this.resetForm();
    this.closeModal();
  };

  public closeConfirmationNo() {
    this.showCloseMessage = false;
  };

  // set properties and open modal
  private open(modal: TemplateRef<any>, nameObj: any): void {
    let modalServ;
    console.log('isModalOpen', this.isModalOpen);
    if (this.isModalOpen) {
      return;
    }
    this.isModalOpen = true;
    this.bsModal = modalServ = this.modalService.open(modal, {
      size: 'lg',
      backdrop: 'static',
      windowClass: 'modal-position',
      keyboard: false
    });

    this.typeAheadEventService.addToListChangeEvent(false);
    this.addTalentForm.enable();

    modalServ.result.then(() => {
      // When user closes
      this.resetForm();
      this.modalEventService.closeModal(true);
      this.typeAheadEventService.addToListChangeEvent(true);
    }, () => {
      // Backdrop click or ESC button pressed
      this.resetForm();
      this.modalEventService.closeModal(true);
      this.typeAheadEventService.addToListChangeEvent(true);
    });


  };

  // Output() event when item is selected from typeAhead
  public modalTypeAheadSelectedItem(val: TypeAheadModel): void {
    this.showAliasCurrentName = true;
    this.selectedTypeAheadRecord = val;
    this.updateAddNameFields(val);

    setTimeout(() => {
      // have to do this to get the reference
      this.setFieldFocus(this.entityNameRef);
      this.disableSSnOccupation(true);

    }, 100);
  };

  public clearTypeAhead(): void {
    this.resetAddNameFields();
    this.disableSSnOccupation(false);
    this.showAliasCurrentName = false;
  };

  // toggle alias fields
  public addAsAlias(evt: Event): void {
    this.showAlias = !this.showAlias;

    if (this.showAlias) {
      // this.resetAddNameFields();
      this.showAddName = false;
      this.addTalentForm.controls.aliasFields['controls'].aliasFirstName
        .setValue(this.addTalentForm.controls.editableFields['controls'].firstName.value);
      this.addTalentForm.controls.aliasFields['controls'].aliasentityName
        .setValue(this.addTalentForm.controls.editableFields['controls'].entityName.value);
      this.addTalentForm.controls.aliasFields['controls'].aliasMiddleName
        .setValue(this.addTalentForm.controls.editableFields['controls'].middleName.value);
      this.addTalentForm.controls.aliasFields['controls'].aliasSuffix
        .setValue(this.addTalentForm.controls.editableFields['controls'].suffix.value);
      this.addTalentForm.controls.aliasFields['controls'].aliasentityName.setValidators([Validators.required])
      this.setEmptyEditFields();
    } else {
      this.showAddName = true;
      this.showAliasCurrentName = false;
      this.addTalentForm.controls.editableFields['controls'].firstName
        .setValue(this.addTalentForm.controls.aliasFields['controls'].aliasFirstName.value);
      this.addTalentForm.controls.editableFields['controls'].entityName
        .setValue(this.addTalentForm.controls.aliasFields['controls'].aliasentityName.value);
      this.addTalentForm.controls.editableFields['controls'].middleName
        .setValue(this.addTalentForm.controls.aliasFields['controls'].aliasMiddleName.value);
      this.addTalentForm.controls.editableFields['controls'].suffix
        .setValue(this.addTalentForm.controls.aliasFields['controls'].aliasSuffix.value);

      this.addTalentForm.controls.aliasFields['controls'].aliasentityName.setValidators([])
      this.disableSSnOccupation(false);
      // this.updateAddNameFields(this.noResultsValues);
      // this.addTalentForm.valid = true;
      this.setEmptyAliasFields();
    }
    this.addTalentForm.markAsDirty();
  };

  private onChanges(): void {
    const firstName: AbstractControl = this.addTalentForm.controls.editableFields['controls'].firstName;
    const entityName: AbstractControl = this.addTalentForm.controls.editableFields['controls'].entityName;
    const middleName: AbstractControl = this.addTalentForm.controls.editableFields['controls'].middleName;
    const suffix: AbstractControl = this.addTalentForm.controls.editableFields['controls'].suffix;
    const companyName: AbstractControl = this.addTalentForm.controls.editableFields['controls'].companyName;
    const ssn: AbstractControl = this.addTalentForm.controls.editableFields['controls'].ssn;
    const occupation: AbstractControl = this.addTalentForm.controls.dropdowns.get('occupation');

    // listen for form changes
    this.addTalentForm.valueChanges.subscribe(val => {
      this.typeAheadEventService.displayData(this.displayNameData(val));
    });

    // listen for ssn change, then format
    this.addTalentForm.controls.editableFields['controls'].ssn.valueChanges.subscribe(val => {
      // this.formatSSN(val);
    });
  };

  // build display name data
  private displayNameData(val: any): TypeAheadDisplayModel {
    const displayData: TypeAheadDisplayModel = new TypeAheadDisplayModel();

    displayData.companyName = val.editableFields.companyName;
    displayData.firstName = !val.aliasCheckbox ? val.editableFields.firstName : val.aliasFields.aliasFirstName;
    displayData.isPerson = this.roleIsPerson;
    displayData.entityName = !val.aliasCheckbox ? val.editableFields.entityName : val.aliasFields.aliasentityName;
    displayData.middleName = !val.aliasCheckbox ? val.editableFields.middleName : val.aliasFields.aliasMiddleName;
    displayData.occupation = this.addTalentForm.controls.dropdowns.get('occupation').value;
    displayData.partyType = val.partyType;
    displayData.ssn = val.editableFields.ssn;
    displayData.suffix = !val.aliasCheckbox ? val.editableFields.suffix : val.aliasFields.aliasSuffix;
    if (this.showAlias) {
      displayData.primaryName = this.createDisplayAliasText(val.editableFields);
    }
    this.currentDisplayData = displayData;
    return displayData;
  }

  // this switch allows us to turn on and off the field's required validator
  private disableEnableSwitch(companyName: AbstractControl, entityName: AbstractControl): void {

    if (this.roleIsPerson) {
      companyName.disable();
      entityName.enable();
      // this.title = 'Confirm/Edit Name';
    } else {
      entityName.disable();
      const firstName: AbstractControl = this.addTalentForm.controls.editableFields['controls'].firstName;
      const middleName: AbstractControl = this.addTalentForm.controls.editableFields['controls'].middleName;

      this.buildCompanyNameString({ firstName: firstName.value, middleName: middleName.value, entityName: entityName.value });
      companyName.enable();
    }
  };

  // EventEmitter when no typeAhead results are found, from main form
  private typeAheadNoResultsFound(item: TypeAheadModel): void {

    const displayData: TypeAheadDisplayModel = new TypeAheadDisplayModel();
    console.log('call the open function');
    this.open(this.noResultsForm, item);
    // this.showAlias = false;this.showAlias = false;
    this.noResultsValues = item;
    this.showAlias = this._checkAsAlias;


    //this.updateAddNameFields(item);
    if(this.showAlias && this.aliasSelecteData){
      this.updateAddNameFields(this.aliasSelecteData);
      this.selectedTypeAheadRecord = this.aliasSelecteData;
      this.addTalentForm.controls.aliasCheckbox.setValue(true);
      this.addTalentForm.controls.aliasCheckbox.disable();
      this.disabledTypeAhead = true;
    } else {
      this.showAlias = false;
      this.updateAddNameFields(item);
    }
    this.updateAliasFields(item);
    this.buildCompanyNameString(item);

    // c2c-type-ahead-display values when show alias is checked bydefualt
    if (this.showAlias) {
      this.currentDisplayData.entityName = item.entityName;
      this.currentDisplayData.firstName = item.firstName;
      this.currentDisplayData.middleName = item.middleName;
      this.currentDisplayData.suffix = item.suffix;

      // alias
      displayData.entityName = this.aliasSelecteData.entityName;
      displayData.firstName = this.aliasSelecteData.firstName;
      displayData.middleName = this.aliasSelecteData.middleName;
      displayData.suffix = this.aliasSelecteData.suffix;
      this.currentDisplayData.primaryName = this.createDisplayAliasText(displayData);
    }
  };

  // create company name from other values
  private buildCompanyNameString(item: any): void {
    const companyName: string = EmptyIfNull.check(item.firstName) + ' ' +
      EmptyIfNull.check(item.middleName) + ' ' +
      EmptyIfNull.check(item.entityName);

    this.addTalentForm.controls.editableFields['controls'].companyName.setValue(companyName);
  };

  private updateAddNameFields(val: TypeAheadModel): void {

    // set values for add name fields
    this.userRoleType = this.typeAheadPersistService.getUserRole();

    this.addTalentForm.controls.editableFields['controls'].firstName.setValue(val.firstName);
    this.addTalentForm.controls.editableFields['controls'].entityName.setValue(val.entityName);
    this.addTalentForm.controls.editableFields['controls'].middleName.setValue(val.middleName);
    this.addTalentForm.controls.editableFields['controls'].suffix.setValue(val.suffix);
    //this.addTalentForm.controls.editableFields['controls'].ssn.setValue();

    if(val.occupation){
      this.addTalentForm.controls.dropdowns['controls'].occupation.setValue('Director');
    }

    if(this.showAlias && this.aliasSelecteData) {
      this.addTalentForm.controls.editableFields.get('firstName').disable();
      this.addTalentForm.controls.editableFields.get('entityName').disable();
      this.addTalentForm.controls.editableFields.get('middleName').disable();
      this.addTalentForm.controls.editableFields.get('suffix').disable();
      this.addTalentForm.controls.editableFields['controls'].ssn.disable()
      this.addTalentForm.controls.dropdowns.get('occupation').disable();
    }

    // dirty flag doesn't get set when auto populating, so forcing it here.
    this.addTalentForm.markAsDirty();
  };

  private updateAliasFields(val: TypeAheadModel): void {

    // set values for alias fields
    this.addTalentForm.controls.aliasFields['controls'].aliasFirstName.setValue(val.firstName);
    this.addTalentForm.controls.aliasFields['controls'].aliasentityName.setValue(val.entityName);
    this.addTalentForm.controls.aliasFields['controls'].aliasMiddleName.setValue(val.middleName);
    this.addTalentForm.controls.aliasFields['controls'].aliasSuffix.setValue(val.suffix);

    // dirty flag doesn't get set when auto populating, so forcing it here.
    this.addTalentForm.markAsDirty();
  };

  protected resetForm(): void {
    this.typeAheadEventService.displayData(true);
    this.showCloseMessage = false;
    this.roleIsPerson = true;
    this.isModalOpen = false;
    this.isSaving = false;
    this.showAlias = false;
    this.showAddName = true;
    this.showAliasCurrentName = false;
    // reset these values back to their defaults
    this.resetAddNameFields();
    this.addTalentForm.controls.dropdowns['controls'].occupation.setValue(occupationDefault);
    this.typeAheadEventService.clearTypeAheadFields();
    this.selectedTypeAheadRecord = null;
  };

  private resetAliasFields() {
    this.addTalentForm.controls.aliasFields.reset();
  };

  private resetAddNameFields() {
    this.addTalentForm.controls.editableFields.reset();
  }

  private resetSingleControl(val: AbstractControl): void {
    val.setValue(null);
  };


  private showConfirmationMessage(): void {
    this.toaster.custom('<span style="color: red">Are you sure you want to cancel?</span>', 'Cancel Confirmation',
      { enableHTML: true, showCloseButton: true, positionClass: 'toast-top-center' })
  };

  private setFieldFocus(ele: ElementRef) {
    if (!ele) {
      return;
    }

    ele.nativeElement.focus();
  };

  /**
  * TODO : Shannon
  * The below functionality has been separated from its original, because
  * I want to extract the save logic out of this class and into another one.
  * This is sitting here for now, until I have time to move it.
  */

  // save function called from TypeAheadModalComponet.ts
  public saveData(vals: any, saveAlias: boolean): void {
    if (!saveAlias) {
      this.saveTypeAheadName(vals);
    } else {
      this.saveAliass(vals);
    }
  };

  // save alias(AKA)
  private saveAliass(vals: any): void {
    const aliasParty: AddAliasModel = new AddAliasModel();
    aliasParty.partyType = this.entityType();
    aliasParty.partyId = (this.selectedTypeAheadRecord) ? this.selectedTypeAheadRecord.partyId : null;
    aliasParty.name.first = EmptyIfNull.check(vals.editableFields.firstName);
    aliasParty.name.middle = EmptyIfNull.check(vals.editableFields.middleName);
    aliasParty.name.entity = EmptyIfNull.check(vals.editableFields.entityName);
    aliasParty.name.suffix = EmptyIfNull.check(vals.editableFields.suffix);
    aliasParty.occupation = this.addTalentForm.controls.dropdowns.get('occupation').value;
    aliasParty.ssn = EmptyIfNull.check(vals.editableFields.ssn);
    aliasParty.displayName = EmptyIfNull.check(this.createDisplayName(vals));

    const AKA: AddAliasAKAModel = new AddAliasAKAModel();
    AKA.name.entity = this.createAliasName(vals);

    this.addAliasService.save(JSON.stringify([aliasParty, AKA])).subscribe(
      (res) => {
        this.sendNewNameToList(res);
        this.saveNotification(true, this.notificationMessage('Alias: ' + AKA.name.entity + ' saved', 'Success!'));
      },
      (err) => {
        const errCode: string = err.error.errors[0].code;
        let message: string = 'Error, Alias did not save';
        console.log(errCode);
        if (errCode === 'aka.already.exist') {
          const partyName = EmptyIfNull.check(aliasParty.name.first)
            + ' ' + EmptyIfNull.check(aliasParty.name.middle)
            + ' ' + EmptyIfNull.check(aliasParty.name.entity)
            + ' ' + EmptyIfNull.check(aliasParty.name.suffix);
          message = 'Alias "' + AKA.name.entity.trim() + '" for party "' + partyName.trim() + '" already exists!';
        }
        if (errCode === 'data.already.exist') {
          message = err.error.errors[0].detail;
        }
        this.saveNotification(false, this.notificationMessage(message, 'Oops!'));
      }
    );
  }

  // save typeAhead name
  private saveTypeAheadName(vals: any): void {
    let tName: TypeAheadSaveModel = new TypeAheadSaveModel();
    tName.partyId = null;

    if (this.roleIsPerson) {
      tName.name.entity = vals.editableFields.entityName;
      tName.name.first = vals.editableFields.firstName;
    } else {
      tName.name.entity = vals.editableFields.companyName;
    }

    tName.partyType = this.entityType();
    tName.name.middle = vals.editableFields.middleName;
    tName.name.suffix = vals.editableFields.suffix;
    tName.ssn = vals.editableFields.ssn;
    tName.occupation = this.addTalentForm.controls.dropdowns.get('occupation').value;
    tName.displayName = this.createDisplayName(vals);
    tName.createdBy = 'Melissa Tapie';
    tName.updatedBy = 'Melissa Tapie';

    this.typeAheadDataService.save(JSON.stringify(tName)).subscribe(
      (res) => {
        this.sendNewNameToList(res);
        this.saveNotification(true, this.notificationMessage('Name saved', 'Success'));
      },
      (err) => {
        const errMessage: string = err.error.errors[0].detail;
        const field: string = err.error.errors[0].field;

        if (field && field.toUpperCase() === 'SSN') {
          this.saveNotification(false, this.notificationMessage(errMessage, 'Oops!'));
        } else {
          this.saveNotification(false, this.notificationMessage('Error, ' + errMessage, 'Oops!'));
        }
      });
  };

  private disableSSnOccupation(val : boolean) : void {
    if(val) {
      this.addTalentForm.controls.editableFields.get('ssn').disable();
      this.addTalentForm.controls.dropdowns.get('occupation').disable();
    return;
    }

    this.addTalentForm.controls.editableFields.get('ssn').enable();
    this.addTalentForm.controls.dropdowns.get('occupation').enable();
  }

  // create display name
  private createDisplayName(vals: any): string {
    return vals.editableFields.entityName + ', ' +
      vals.editableFields.suffix + ', ' +
      vals.editableFields.firstName + ' ' +
      vals.editableFields.middleName;
  };

  // create alias name
  private createAliasName(vals: any): string {
    const alias: string = EmptyIfNull.check(vals.aliasFields.aliasFirstName) + ' ' +
      EmptyIfNull.check(vals.aliasFields.aliasMiddleName) + ' ' +
      EmptyIfNull.check(vals.aliasFields.aliasentityName) + ((vals.aliasFields.aliasSuffix) ? ', ' : '') +
      EmptyIfNull.check(vals.aliasFields.aliasSuffix);

      return alias;
  };

  // return entity type
  private entityType(): string {
    if (this.roleIsPerson) {
      return EntityTypes.TALENT.toUpperCase();
    } else {
      return EntityTypes.COMPANY.toUpperCase();
    }
  };

  // create save notification message
  private notificationMessage(message: string, title: string): object {
    return {
      message: message,
      title: title
    }
  };

  // save notification with toaster
  private saveNotification(success: boolean, message: object): void {
    if (success) {
      this.toasterService.success(message['message'], message['title']);
      setTimeout(() => {
        this.resetForm();
        this.closeModal();
      }, 100);
    } else {
      this.toasterService.error(message['message'], message['title']);
      this.addTalentForm.enable();
      this.isSaving = false;
    }
  };

  private setEmptyEditFields() {
    this.addTalentForm.controls.editableFields['controls'].firstName.setValue('');
    this.addTalentForm.controls.editableFields['controls'].entityName.setValue('');
    this.addTalentForm.controls.editableFields['controls'].middleName.setValue('');
    this.addTalentForm.controls.editableFields['controls'].suffix.setValue('');
  }

  private setEmptyAliasFields() {
    this.addTalentForm.controls.aliasFields['controls'].aliasFirstName.setValue('');
    this.addTalentForm.controls.aliasFields['controls'].aliasentityName.setValue('');
    this.addTalentForm.controls.aliasFields['controls'].aliasMiddleName.setValue('');
    this.addTalentForm.controls.aliasFields['controls'].aliasSuffix.setValue('');
  }

  private createDisplayAliasText(val: TypeAheadDisplayModel): string {
    return  (val.firstName  || '') + ' ' +
            (val.middleName || '') + ' ' +
            (val.entityName   || '') +
            (val.suffix ? ', ' + val.suffix : '');
  }

  private sendNewNameToList(val: any): void {
    const selectedName: TypeAheadModel = new TypeAheadModel();

    this.typeAheadEventService.addToListChangeEvent(true);

    selectedName.entityName = val['name'].entity;
    selectedName.firstName = val['name'].first;
    selectedName.middleName = val['name'].middle;
    selectedName.occupation = val['occupation'];
    selectedName.partyId = val['partyId'];
    selectedName.ssnEndChars = val['ssn'];
    selectedName.suffix = val['name'].suffix;
    selectedName.typeAheadDisplayName = val['displayName'] || val['name'].entity;

    this.typeAheadEventService.typeAheadChangeEvent(selectedName);
    this.typeAheadEventService.addToListChangeEvent(false);
  }

  private goToFullRecordPage(){
    this.closeModal();
    if(this.fullRecordParams){
      const routeParam = this[this.fullRecordParams];
      //, { queryParams: {fullRecordParam: queryParams}}
      this.router.navigate([this._fullRecordRouterLink, routeParam]);
    } else {
      this.router.navigate([this._fullRecordRouterLink]);
    }

  }
}

