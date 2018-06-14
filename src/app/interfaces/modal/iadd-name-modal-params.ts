import { FormGroup } from '@angular/forms';

export interface IAddNameModalParamsModel {
  title: string;
  label: string;
  addAlias: boolean;
  nameFields: FormGroup;
  additionalFields: FormGroup;
  nameDisplayedAs: boolean;
  service: any;
}
