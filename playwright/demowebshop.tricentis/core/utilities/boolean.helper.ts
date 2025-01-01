export class BooleanHelper {
    static getBooleanValueFromString = (str: string) => {
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