/**
 * Author : Shannon Bruns
 * Example of overloading with TypeScript
 */

export class EmptyIfNull {

    static check(val : string);
    static check(val : Array<string>);
    static check(val : string | Array<string>) : string | Array<string> {

        let newVal : string | Array<string>;
        
        switch(typeof val) {
            case "string":
            case "undefined":
                newVal = (val) ? val : '';
                break;
        }

        return newVal;
    }


}