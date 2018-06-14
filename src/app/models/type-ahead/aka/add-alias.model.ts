import { ITypeAheadSaveName } from "../../../interfaces/type-ahead/itype-ahead-save-name";
import { IAddAliasParty } from "../../../interfaces/type-ahead/aka/iadd-alias-party";

export class AddAliasModel implements IAddAliasParty {
    public company           : string = null;
    public displayName       : string = null;
    public occupation        : string = null;
    public partyId           : string = null;
    public partyType         : string = null;
    public ssn               : string = null; 
    public name              : ITypeAheadSaveName = {
            first  : null,
            entity : null,
            middle : null,
            suffix : null
    };
   
}