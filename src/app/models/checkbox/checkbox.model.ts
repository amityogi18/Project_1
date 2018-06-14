export class CheckboxModel {
  id: string;
  name: string;
  options: {
    value: string,
    label: string,
    checked: boolean,
    showTitle: boolean
  }[];

  constructor (
    id: string,
    name: string,
    options: {value: string, label: string, checked: boolean, showTitle}[]
  ) {
      this.id = id;
      this.name = name;
      this.options = options;
  }
}
