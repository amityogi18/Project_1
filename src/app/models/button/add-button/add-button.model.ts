import { IAddButton } from '../../../interfaces/button/add-button/iadd-button';

export class AddButtonModel implements IAddButton {
    modulePrefix: string = 'TestFC';
    sourcePage: string = 'TestAllProjects';
    requiredAction: string = 'row';
    route?: string;
    modal?: string;
    tooltip?: string = 'Add Record';

    constructor(
        modulePrefix: string,
        sourcePage: string,
        requiredAction: string,
        route?: string,
        modal?: string,
        tooltip?: string
    ) {
        this.modulePrefix = modulePrefix;
        this.sourcePage = sourcePage;
        this.requiredAction = requiredAction;
        this.route = route;
        this.modal = modal;
        this.tooltip = tooltip;
    }
}
