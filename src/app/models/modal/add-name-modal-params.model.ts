import { IAddNameModalParamsModel } from '../../interfaces/modal/iadd-name-modal-params';
import { FormGroup } from '@angular/forms';

export class AddNameModalParamsModel implements IAddNameModalParamsModel {
  public title: string;
  public label: string;
  public addAlias: boolean;
  public nameFields : FormGroup;
  public additionalFields: FormGroup;
  public nameDisplayedAs: boolean;
  public service: any;

  constructor(obj) {
    this.title = obj.title || '';
    this.label = obj.label || '';
    this.addAlias = obj.addAlias || false;
    this.nameFields = obj.nameFields || [];
    this.additionalFields = obj.additionFields || [];
    this.nameDisplayedAs = obj.nameDisplayedAs || false;
    this.service = obj.service || {};
  }
}
