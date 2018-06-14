import { normalizeGenFileSuffix, splitTypescriptSuffix } from "@angular/compiler/src/aot/util";

export interface ITypeAhead {
    agency                  : string,
    company                 : string,
    displayNameArray        : Array<string>
    entityName              : string,
    firstName               : string,
    hasData                 : boolean,
    hasError?               : boolean,
    lastName                : string,
    links?                  : string,
    middleName              : string,
    occupation              : string,
    partyId                 : string,
    searchReturnTime        : string;
    ssnEndChars             : string,
    suffix                  : string,
    typeAheadDisplayName    : string
}
