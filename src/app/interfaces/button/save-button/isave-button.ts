export interface ISaveButton {
    modulePrefix: string;
    sourcePage: string;
    requiredAction: string;
    route?: string;
    modal?: object;
    modalAction? : string;
}
