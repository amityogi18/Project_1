import { Component, OnInit, Input, ViewChild, TemplateRef, Renderer2, ViewChildren, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { AccentedCharacterService } from '../services/http/accented-character/accented-character.service';
import { TypeAheadEventService } from '../services/events/type-ahead/type-ahead-event.service';
import { AccentedCharsModel } from '../models/accented-chars/accented-chars.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'c2c-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  providers: [AccentedCharacterService]
})
export class ModalComponent implements OnDestroy, AfterViewInit {

  @ViewChild('modal') genericModal: TemplateRef<any>;
  @ViewChild('focusTest') focusTest: ElementRef;
  public isFirst: ElementRef;

  public accentedCharacters: AccentedCharsModel[];
  private bsModal: NgbModalRef;
  private modalOpen: boolean;
  private subscription: Subscription;

  constructor(private modalService: NgbModal,
              private typeAheadEventService: TypeAheadEventService,
              private accentedCharacterService: AccentedCharacterService,
              private renderer: Renderer2) {

    this.subscription = this.typeAheadEventService.getAccentedCharacters()
      .subscribe(item => this.openModal(item));
   };

   ngAfterViewInit() {
    // const element = this.focusTest.nativeElement.querySelector('[autofocus]');
    // if (element) { element.focus(); }
   }

  public close(): void {
    this.modalOpen = false;
    this.bsModal.close();
  };

  public selectedCharacter(evt: MouseEvent): void {

    const btn: HTMLElement = evt.currentTarget as HTMLElement;
    const char: string = btn.innerText;

    this.typeAheadEventService.replaceWithAccentedCharacter(char.trim());
    this.close();
  };

  private openModal(accentedCharacterToSearch: string): void {
    this.accentedCharacterService.get(accentedCharacterToSearch).subscribe(
      (res) => {
        this.accentedCharacters = res;
        this.open(this.genericModal);
        this.modalOpen = true;
      }
    );
  }

  private open(modal: TemplateRef<any>) : void {

    if (this.modalOpen) {
      return;
    }
    this.bsModal = this.modalService.open(modal,{
      backdrop: 'static',
      windowClass: 'modal-position',
      keyboard: false
      });
  };

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
