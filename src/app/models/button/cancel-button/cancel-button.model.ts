import { ICancelButton } from '../../../interfaces/button/cancel-button/icancel-button';

export class CancelButtonModel implements ICancelButton {
    modulePrefix: string = 'TestFC';
    sourcePage: string = 'TestAllProjects';
    requiredAction: string = 'row';
    route?: string;
    modal?: object;

    constructor(
        modulePrefix: string,
        sourcePage: string,
        requiredAction: string,
        route?: string,
        modal?: object
    ) {
        this.modulePrefix = modulePrefix;
        this.sourcePage = sourcePage;
        this.requiredAction = requiredAction;
        this.route = route;
        this.modal = modal;
    }
}