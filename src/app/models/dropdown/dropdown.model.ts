export class DropdownModel {
    action: string;
    title: string;
    dropdownValue: any;
    selection: string;
    options: any[];

    constructor (
      action: string,
      title: string,
      dropdownValue: any,
      selection: string,
      options: any[]
    ) {
        this.action = action;
        this.title = title;
        this.dropdownValue = dropdownValue;
        this.selection = selection;
        this.options = options;
    }
}
