export class BooleanHelper {
    static getBooleanValueFromString = (str: string) => {
        // if (/true|checked/i.test(str)) {
        //     return true;
        // } else if (/false | disabled/i.test(str) && !/true|checked/i.test(str)) {
        //     return false;
        // } else if (!/true|checked/i.test(str) && !/false | disabled/i.test(str)) {
        //     return false;
        // }
        // throw new Error(`Unexpected state string: ${str}`);
        switch (true) {
            case /true|checked|Yes/gi.test(str):
                return true;

            case !/true|checked|Yes/i.test(str) && /false|disabled|No/gi.test(str):
                return false;

            case !/true|checked|Yes/gi.test(str) && !/false|disabled|No/i.test(str):
                return false;

            default: throw new Error(`Invalid input string: ${str}`);
        }
    };
}