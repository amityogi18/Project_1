import {
  Component,
  OnInit,
  OnDestroy,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  Input,
  AfterViewInit,
  AfterContentInit,
  ContentChildren,
  QueryList,
  ElementRef
 } from '@angular/core';

import { NgbModal, ModalDismissReasons, NgbModalRef ,NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

import { ModalEventService } from '../../../services/events/modal/modal-event.service';
import { TypeAheadEventService } from '../../../services/events/type-ahead/type-ahead-event.service';
import { TypeAheadModel } from '../../../models/type-ahead/type-ahead.model';

@Component({
  selector: 'c2c-generic-modal',
  templateUrl: './generic-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./generic-modal.component.scss']
})

export class GenericModalComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {

  private _showHeader : boolean = false;
  private _showFooter : boolean = false;

  @Input() public title      : string;

  @Input('openModal') set openModal(val: boolean) {

    if(val === undefined)
      return;

    if(val)
      this.open();
    else
      this.close();
  };

  @Input('showHeader')
  set showHeader(val : boolean) {
    if (val === undefined) {
      return;
    }

      // Input returns a typeof string, so convert
      this._showHeader = new Boolean(val).valueOf();
  };

  get showHeader(): boolean {
    return this._showHeader;
  };

  @Input('showFooter')
  set showFooter(val: boolean) {
    if (val === undefined) {
      return;
    }

      // Input returns a typeof string, so convert
      this._showFooter = new Boolean(val).valueOf();
  };

  get showFooter() : boolean {
    return this._showFooter;
  };

  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  @ContentChildren(GenericModalComponent) genericModalChildren : QueryList<GenericModalComponent>;

  private bsModal     : NgbModalRef;
  public formData     : TypeAheadModel;
  private modalClose  : Subscription;
  private modalOpen   : Subscription;


  constructor(private modalService : NgbModal, private modalEventService : ModalEventService,
    private typeAheadEventService : TypeAheadEventService) {

    this.modalClose = this.modalEventService.onCloseModal()
    .subscribe(item => this.close(item));

    this.modalOpen = this.typeAheadEventService.getTypeAheadNoResults()
      .subscribe(item => this.open());
   }

  ngOnInit() {
    //not being used yet
  };

  ngAfterViewInit() {

  }

  ngAfterContentInit() {
    // let contentChildren : GenericModalComponent[] = this.genericModalChildren.toArray();
    // console.log(contentChildren);

  };

  ngOnDestroy() {
    this.modalOpen.unsubscribe();
    this.modalClose.unsubscribe();
  };

  public close(evt?:Event) : void {
    this.bsModal.close();
  };

  public open(): void {
    this.bsModal = this.modalService.open(this.modalContent,{
      backdrop: 'static',
      size : 'lg',
      windowClass: 'modal-position',
      keyboard:false
      });
  };
}
