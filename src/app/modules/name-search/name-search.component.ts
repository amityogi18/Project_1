import { Component, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { ModalEventService } from '../../services/events/modal/modal-event.service';
import { TypeAheadService } from '../../services/http/type-ahead/type-ahead.service';

@Component({
  selector: 'c2c-name-search',
  templateUrl: './name-search.component.html',
  styleUrls: ['./name-search.component.scss'],
  providers: [ModalEventService, TypeAheadService]
})

export class NameSearchComponent implements OnInit {

  @ViewChild('typeAhead') typeAhead: ElementRef;

  public typeAheadDataService: any;
  public title: string = 'Proof of Concept - Name Type-Ahead';
  public displayString: string;

  constructor(private typeAheadService: TypeAheadService ) {
  }

  public metaData: object = {
    BUSINESS_CREATIVE: ['occupation', 'agency'],
    PRODUCTION: ['occupation', 'ssnEndChars'],
    CASTING: ['agency', 'ssnEndChars'],
    default: ['occupation', 'ssnEndChars']

  }

  public typeAheadModalConfig: any = {
    title: 'Add New Talent name',
    label: 'This is a label',
    showAddAlias: true,
    displayNameAs: true,
    additionalFieldsDisplayed: true
  };

  ngOnInit() {
    // service needed for typeAhead data
   this.typeAheadDataService = this.typeAheadService;

  }

  public returnedResults(evt: Array<any>) {
    console.log('returned from params model', evt);
  }

  public noSearchResultsReturned(evt?: Event): void {
    console.log('no results');
  }

  public selectedTypeAheadRecord(evt: Event): void {
    console.log('Name Search - Selected TypeAhead Record');
  }

  public typeAheadReturnResults(evt: Array<any>): void {
    evt.forEach(element => {
      if (element.primaryName) {
        this.displayString = '(alias for ' + element.primaryName + ')';
      }
    });
  }
}
