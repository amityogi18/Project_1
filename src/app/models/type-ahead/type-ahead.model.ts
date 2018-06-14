import { ITypeAhead } from "../../interfaces/type-ahead/itype-ahead";

export class TypeAheadModel implements ITypeAhead {
    public agency               : string;
    public company              : string;
    public displayNameArray     : Array<string>;
    public entityName           : string;
    public firstName            : string;
    public hasData              : boolean;
    public hasError?            : boolean;
    public lastName             : string;
    public links?               : string;
    public middleName           : string;
    public metaData?            : string;
    public occupation           : string;
    public partyId              : string;
    public searchReturnTime     : string;
    public ssnEndChars          : string;
    public suffix               : string;
    public typeAheadDisplayName : string;
    public selectedItemInList?  : boolean;
}
