import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs/Subscription';
import { UnsavedChangesService } from '../../services/events/modal/unsaved-changes-event/unsaved-changes.service';

/**
 * The Unsaved Changes Component
 *
 * Handles the "unsaved changes" modal that will appear when a user navigates away from the current page without saving
 */
@Component({
  selector: 'c2c-unsaved-changes',
  templateUrl: './unsaved-changes.component.html',
  styleUrls: ['./unsaved-changes.component.scss']
})
export class UnsavedChangesComponent implements OnInit {

  private modalOptions: NgbModalOptions = {
    backdrop: 'static',
    keyboard: false
  };

  private openModalSubscription: Subscription;
  private closeModalSubscription: Subscription;
  public modal: NgbModalRef;

  /** Sets the value to be used to either display a button to activate modal or not. */
  @Input() public showBtn: boolean = true;

  /** The content of the modal to be displayed when opened. */
  @ViewChild('content') private content: any;

  /**
   * Constructor for the unsaved changes component
   *
   * Defines the frameworkComponents (custom cell renderers) used in the Grid.
   * Subscribes to any events happening within the Grid.
   *
   * @param modalService The Bootstrap NGB Modal service.
   */
  constructor(private modalService: NgbModal, private unsavedChangesService: UnsavedChangesService) {
    this.openModalSubscription = this.unsavedChangesService.onOpenModal()
      .subscribe(value => {
        this.modal = this.modalService.open(this.content, this.modalOptions);
      });

    this.closeModalSubscription = this.unsavedChangesService.onCloseModal()
      .subscribe(value => {
        this.modal.close();
      });
  }

  ngOnInit() {
  }

  /**
   * Opens modal.
   */
  openModal() {
    this.unsavedChangesService.openModal();
    // this.modal = this.modalService.open(this.content, this.modalOptions);
  }

  /**
   * Fires when a user clicks either the check mark or X icon in the modal.
   * @param value Value of button clicked. Check Mark passes true (confirm) and X
   * pass false (cancel).
   */
  close(value: string) {
    this.unsavedChangesService.closeModal(value);
    // this.modal.close();
  }

}
