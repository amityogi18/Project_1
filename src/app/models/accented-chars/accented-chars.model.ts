import { IAccentedChars } from '../../interfaces/accented-chars/accented-chars';

export class AccentedCharsModel implements IAccentedChars {
  public upper : string;
  public lower : string;

  constructor(obj: any) {
    this.upper = obj[1];
    this.lower = obj[0];
  }
}
