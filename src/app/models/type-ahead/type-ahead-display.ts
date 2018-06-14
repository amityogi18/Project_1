import { ITypeAheadDisplay } from "../../interfaces/type-ahead/itype-ahead-display";

export class TypeAheadDisplayModel implements ITypeAheadDisplay {
    public agency       : string;
    public companyName? : string;
    public firstName    : string;
    public isPerson?    : boolean;
    public entityName   : string;
    public middleName   : string;
    public occupation   : string;
    public partyType    : string;
    public ssn          : string;
    public suffix       : string;
    public userRoleType : string;
    public primaryName? : string;
}
