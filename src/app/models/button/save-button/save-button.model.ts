import { ISaveButton } from '../../../interfaces/button/save-button/isave-button';

export class SaveButtonModel implements ISaveButton {
    modulePrefix: string = 'TestFC';
    sourcePage: string = 'TestAllProjects';
    requiredAction: string = 'row';
    route?: string;
    modal?: object;
    modalAction? : string;

    constructor(
        modulePrefix: string,
        sourcePage: string,
        requiredAction: string,
        route?: string,
        modal?: object,
        modalAction? : string
    ) {
        this.modulePrefix = modulePrefix;
        this.sourcePage = sourcePage;
        this.requiredAction = requiredAction;
        this.route = route;
        this.modal = modal;
        this.modalAction = modalAction;
    }
}