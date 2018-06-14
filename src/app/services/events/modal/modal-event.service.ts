import { Injectable, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ModalEventService {

  constructor() { }

    private _closeModalConfig = new EventEmitter<any>();
    private _openModalConfig = new EventEmitter<any>();

    public closeModal(value:any) : void {
        this._closeModalConfig.emit(value);
    };

    public onCloseModal() : EventEmitter<any> {
        return this._closeModalConfig;
    };

    public openModal(value:any) : void {
        this._openModalConfig.emit(value);
    };

    public onOpenModal() : EventEmitter<any> {
        return this._openModalConfig;
    };

}