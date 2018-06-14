import { Component, TemplateRef, ViewChild, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef , NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'c2c-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.scss']
})

export class GenericModalComponent {

  private _showHeader: boolean = false;
  private _showFooter: boolean = false;
  private bsModal: NgbModalRef;

  @Input() public title: string;
  @Input() public size: string = 'lg'; // default
  @Input('openModal') set openModal(val: boolean) {

    if (val === undefined) { return; }
    if (val) { this.open(); } else { this.close(); }
  }

  @Input('showHeader')
  set showHeader(val: boolean) {
    if (val === undefined) { return; }
    this._showHeader = val.valueOf();  // Input returns a typeof string, so convert
  }
  get showHeader(): boolean { return this._showHeader; }

  @Input('showFooter')
  set showFooter(val: boolean) {
    if (val === undefined) { return; }
    this._showFooter = val.valueOf();  // Input returns a typeof string, so convert
  }
  get showFooter(): boolean { return this._showFooter; }

  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  constructor(private modalService: NgbModal) {}

  public open(): void {
    const params: object = { backdrop: 'static',
                              size: this.size,
                              windowClass: 'modal-position',
                              keyboard: false
                            };
    this.bsModal = this.modalService.open(this.modalContent, params);
  }

  public close(): void {
    this.bsModal.close();
  }
}
