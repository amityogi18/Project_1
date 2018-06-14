import { Injectable, ViewContainerRef } from '@angular/core';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class ToasterService {

    constructor(private toastr: ToastsManager, private toastOpts: ToastOptions) {
        this.toastOpts.toastLife = 8000;
        this.toastOpts.positionClass = 'toast-top-center';
        this.toastOpts.showCloseButton = true;
        this.toastOpts.positionClass = 'toast-top-center';
    };

    public success(message : string, title? : string) : void {
        this.toastr.success(message,title);
    };

    public info(message : string, title? : string) : void {
        this.toastr.info(message);
    };

    public warning(message : string, title? : string) : void {
        this.toastr.warning(message);
    };

    public error(message : string, title? : string) : void {
        this.toastr.error(message);
    };
}