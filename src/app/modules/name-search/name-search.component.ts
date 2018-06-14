import { Component, OnInit, AfterViewInit} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../modal/modal.component';
import { GenericModalComponent } from '../elements/generic-modal/generic-modal.component';
import { ModalEventService } from '../../services/events/modal/modal-event.service';
import { UrlResolverService } from '../../services/non-http-data/url-resolver.service';
import { TypeAheadService } from '../../services/http/type-ahead/type-ahead.service';

@Component({
  selector: 'c2c-name-search',
  templateUrl: './name-search.component.html',
  styleUrls: ['./name-search.component.scss'],
  providers: [ModalEventService, TypeAheadService]
})

export class NameSearchComponent implements OnInit {

  public typeAheadDataService: any;

  constructor(private modalEventService: ModalEventService,
              private urlResolverService: UrlResolverService,
              private typeAheadService: TypeAheadService ) {
  }

  public metaData: object = {
    BUSINESS_CREATIVE: ['occupation', 'agency'],
    PRODUCTION: ['occupation', 'ssnEndChars'],
    CASTING: ['agency', 'ssnEndChars'],
    default: ['occupation', 'ssnEndChars']

  }

  public title: string = 'Proof of Concept - Name Type-Ahead';

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

  public selectedTypeAheadRecord(evt: Event) {
    console.log('Name Search - Selected TypeAhead Record');
  }
}
