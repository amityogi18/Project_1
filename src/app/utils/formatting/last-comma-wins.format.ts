import { TypeAheadDisplayModel } from "../../models/type-ahead/type-ahead-display";
import { C2CRegex } from "../../const/regex";
import { EmptyIfNull } from "../../utils/strings/empty-if-null";

export class LastCommaWins {

    /**
     * Loop through the regular expression's array to determine
     * the pattern of the searchTerm. These regular expressions 
     * are stored in the Regex class
     * @param searchTerm 
    */
    public static parseData(searchTerm:string) : TypeAheadDisplayModel {

        let regexArray    : RegExpExecArray;
        let displayData   : TypeAheadDisplayModel = new TypeAheadDisplayModel();
        let trimmed       : string = searchTerm.trim();
        let commaExists   : boolean = (trimmed.indexOf(',') > -1);

        let displayGroup  : any;

        C2CRegex.typeAheadExpressions.forEach(reg => {
            if ((regexArray = reg.exec(trimmed)) !== null) {
                regexArray.forEach((match, groupIndex) => {
                        if(commaExists)
                            displayGroup = { entityName:1, firstName:2, middleName:3, suffix:4 };
                        else
                            displayGroup = this.determineGroupOrder(regexArray.length);
            
                        displayData.entityName   = EmptyIfNull.check(regexArray[displayGroup.entityName]);
                        displayData.firstName    = EmptyIfNull.check(regexArray[displayGroup.firstName]);
                        displayData.middleName   = EmptyIfNull.check(regexArray[displayGroup.middleName]);
                        displayData.suffix       = EmptyIfNull.check(regexArray[displayGroup.suffix]);

                    reg.lastIndex = 0;  // Important! lastIndex needs to be reset when using the g (global) flag,
                                        // otherwise running the same expression multiple times will fail
                });
            }
        });

        return displayData;
    };

    //without being able to identify name captured groups we need (available in es2018)
    //to determine the display order within the group
    private static determineGroupOrder(len : number) : any {

        let displayGroup = { };

        switch(len-1) {
            case 1:
                displayGroup = { entityName:1 };
            break;
            case 2:
                displayGroup = { firstName:1, entityName:2 }
            break;
            case 3:
                displayGroup = { firstName:1, middleName:2, entityName:3 }
            break;
            case 4:
                displayGroup = { firstName:1, middleName:2, entityName:3, suffix:4 }
            break;
        }

        return displayGroup;
    }
};



