import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { TypeAheadEventService } from '../../../services/events/type-ahead/type-ahead-event.service';
import { Subscription } from 'rxjs/Subscription';
import { formatSSN } from '../../../utils/formatting/ssn.format';
import { TypeAheadDisplayModel } from '../../../models/type-ahead/type-ahead-display';
import { EntityTypes } from '../../../enums/entity/entity-types.enum';
import { TypeAheadPersistService } from '../../../services/persist/type-ahead/type-ahead-persist.service';
import { UserRole } from '../../../enums/entity/user-role.enum';

@Component({
  selector: 'c2c-type-ahead-display',
  templateUrl: './type-ahead-display.component.html',
  styleUrls: ['./type-ahead-display.component.scss']
})
export class TypeAheadDisplayComponent implements OnInit {
  private subscription    : Subscription;
  public appName          : string;
  public typeAheadName    : string;
  private userRoleType    : string;
  @Input()
  private displayData     : TypeAheadDisplayModel;

  @Input() isDiabled : boolean;
  
  constructor(private typeAheadEventService : TypeAheadEventService,
              private typeAheadPersistService : TypeAheadPersistService) {

    this.subscription = typeAheadEventService.getDisplayData()
    .subscribe(item => this.displayDataAs(item));

    this.subscription = this.typeAheadEventService.getTypeAheadFilterValues()
    .subscribe(item => this.typeAheadFilterValuesChanged(item));

    this.subscription = this.typeAheadEventService.getClearTypeAheadFields()
    .subscribe(item =>  this.clearTypeAheadValues());
   }

  ngOnInit() {
    this.displayDataAs(this.displayData);
  }

  //set up the display data
  //in typescript we can define paramaters as multiple types
  private displayDataAs = (val : TypeAheadDisplayModel) => {

    if(!val)
      return;

    this.userRoleType = this.typeAheadPersistService.getUserRole();
    this.displayData = val;

    try{
      if(val.isPerson){
        this.appName = this.createDisplayInAppName(val);
        this.typeAheadName = this.createDisplayTypeAheadName(val);
        this.createDisplayAlias(val.primaryName);
      } else if(!val.isPerson && val.partyType) {
        if((val.partyType.toUpperCase() === EntityTypes.TALENT.toUpperCase()) ||
          (val.partyType.toUpperCase() === EntityTypes.TALENT_AKA.toUpperCase())){
            this.appName = this.createDisplayInAppName(val);
            this.typeAheadName = this.createDisplayTypeAheadName(val);
            this.createDisplayAlias(val.primaryName);
        }
      } else {
        this.appName = this.typeAheadName = this.createDisplayNameForNonPerson(val);
      }  
    } catch(err){
      console.error("TypeAheadDisplay Error, lines 43 - 50");
      //console.error(err.message);
    }
    
  };

  private typeAheadFilterValuesChanged(val:any){
    this.userRoleType = this.typeAheadPersistService.getUserRole();
    this.displayDataAs(this.displayData);
  }

  private createDisplayInAppName(val:TypeAheadDisplayModel) : string {
    return  (val.firstName  || '') + ' ' +
            (val.middleName || '') + ' ' +
            (val.entityName   || '') +
            (val.suffix ? ', ' + val.suffix : '')
  };

  private createDisplayTypeAheadName(val:TypeAheadDisplayModel) : string {

    let agency : string = (val.agency) ? ' | ' + val.agency : '';
    let occupation : string = (val.occupation) ? ' | ' + val.occupation : '';
    let ssn : string = (val.ssn) ? ' | ' + formatSSN(val.ssn ,true) : '';

    let businessCreativeString : string = occupation + agency;
    let castingString : string = agency + ssn;
    let productionString : string = occupation + ssn;

    let name : string = (val.entityName   || '') + ', ' +
                        (val.firstName  || '') +
                        (val.middleName ? ' ' + val.middleName : '') +
                        (val.suffix ? ', '+ val.suffix : '' )

    let returnString : string = '';

    if(this.userRoleType.toUpperCase() === UserRole.CASTING.toUpperCase()){
      returnString = castingString;
    } else if(this.userRoleType.toUpperCase() === UserRole.BUSINESS_CREATIVE.toUpperCase()){
      returnString = businessCreativeString;
    } else if(this.userRoleType.toUpperCase() === UserRole.PRODUCTION.toUpperCase()){
      returnString = productionString;
    }

    let fullString : string = name.concat(returnString);
    return name + returnString;

  };

  private createDisplayNameForNonPerson(val:TypeAheadDisplayModel) : string {
    return val.companyName;
  };

  private clearTypeAheadValues() : void {
    this.displayData = null;
    this.appName = null;
    this.typeAheadName = null;
  }

  private createDisplayAlias(val: string): void {
    if(val) {
      if(!(/^\s*$/.test(val)))
        this.appName = `${this.appName} (alias for ${val})`;
    }
  }
}
