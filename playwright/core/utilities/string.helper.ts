export class StringHelper {
    static extractAlphabets = (text: string): string => {
        return text.replace(/[^a-zA-Z]/g, '');
    };

    static isString = (text: any): boolean => typeof text === 'string';
}