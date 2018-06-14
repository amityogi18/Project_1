import { Injectable, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UnsavedChangesService {

    private openModalEvent = new EventEmitter<any>();
    private closeModalEvent = new EventEmitter<any>();

    constructor() { }

    public closeModal(value): void {
        this.closeModalEvent.emit(value);
    }

    public onCloseModal(): EventEmitter<any> {
        return this.closeModalEvent;
    }

    public openModal(): void {
        this.openModalEvent.emit('open');
    }

    public onOpenModal(): EventEmitter<any> {
       return this.openModalEvent;
    }
}
