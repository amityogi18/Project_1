import { ITypeAheadSaveName } from '../../interfaces/type-ahead/itype-ahead-save-name';

export interface ITypeAheadSave {
    partyId                 : string,
    partyType               : string,
    name                    : ITypeAheadSaveName,
    ssn                     : string,
    occupation              : string,
    displayName             : string,
    company                 : string,
    createdBy               : string,
    updatedBy               : string
}