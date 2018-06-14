import { ITypeAheadSaveName } from "../../../interfaces/type-ahead/itype-ahead-save-name";

export interface IAddAliasParty {
    company           : string,
    displayName       : string,
    name              : ITypeAheadSaveName,
    occupation        : string,
    partyId           : string,
    partyType         : string,
    ssn               : string
}