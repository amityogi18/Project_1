import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TypeAheadEventService } from '../../../services/events/type-ahead/type-ahead-event.service';
import { Subscription } from 'rxjs';
import { TypeAheadDisplayModel } from '../../../models/type-ahead/type-ahead-display';
import { formatSSN } from '../../../utils/formatting/ssn.format';

@Component({
  selector: 'c2c-type-ahead-details',
  templateUrl: './type-ahead-details-form.component.html',
  styleUrls: ['./type-ahead-details-form.component.scss']
})
export class TypeAheadDetailsComponent implements OnInit {

  constructor(private typeAheadEventService :TypeAheadEventService) { 

    //listening for the change event
    this.subscription = this.typeAheadEventService.getTypeAheadChangeEvent()
    .subscribe(item => this.typeAheadDataChanged(item));

    this.subscription = this.typeAheadEventService.getClearTypeAheadFields()
    .subscribe(item =>  this.clearTypeAheadValues());
  }  

  private subscription: Subscription;
  private detailsForm : FormGroup;

  ngOnInit() {
      this.detailsForm = new FormGroup({
          agency          : new FormControl({value:null,disabled:true}),
          occupation      : new FormControl({value:null,disabled:true}),
          ssn             : new FormControl({value:null,disabled:true}),
      });
    }

  public typeAheadDataChanged(val:any){

    let displayData : TypeAheadDisplayModel = new TypeAheadDisplayModel();
        displayData.agency      = val.agency;
       // displayData.companyName = val.companyName || '';
        displayData.firstName    = val.firstName;
        displayData.entityName   = val.entityName;
        displayData.middleName   = val.middleName;
        displayData.occupation   = val.occupation;
        displayData.partyType    = val.partyType;
        displayData.ssn          = val.ssnEndChars;
        displayData.suffix       = val.suffix;

    this.typeAheadEventService.displayData(displayData);
    this.detailsForm.controls.agency.setValue(displayData.agency);
    this.detailsForm.controls.occupation.setValue(displayData.occupation);
    this.detailsForm.controls.ssn.setValue(formatSSN(displayData.ssn));
  }

  public clearTypeAheadValues(){
      this.detailsForm.reset();
  }

}
