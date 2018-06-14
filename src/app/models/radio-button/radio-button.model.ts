export class RadioButtonModel {
  radioTitle: string;
  choices: {
    title: string,
    checkedByDefault: boolean,
    disabled: boolean,
    showTitle: boolean
  }[];

  constructor (
    radioTitle: string,
    choices: {title, checkedByDefault, disabled, showTitle}[]
  ) {
      this.radioTitle = radioTitle;
      this.choices = choices;
  }
}
