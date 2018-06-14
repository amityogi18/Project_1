import { ITypeAheadSave } from "../../interfaces/type-ahead/itype-ahead-save";
import { ITypeAheadSaveName } from '../../interfaces/type-ahead/itype-ahead-save-name';

export class TypeAheadSaveModel implements ITypeAheadSave {
    public partyId           : string = null;
    public partyType         : string = null;
    public name              : ITypeAheadSaveName = {
            first : null,
            entity : null,
            middle : null,
            suffix : null
    };
    public suffix            : string = null;
    public ssn               : string = null;
    public occupation        : string = null;
    public displayName       : string = null;
    public company           : string = null;
    public createdBy         : string = null;
    public updatedBy         : string = null;
    
}