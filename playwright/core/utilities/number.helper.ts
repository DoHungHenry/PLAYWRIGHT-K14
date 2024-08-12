export class NumberHelper {
    static roundToNearest2DecimalPlaces = (num: number) => Number(num.toFixed(2));

    static roundToNearest4DecimalPlaces = (num: number) => Number(num.toFixed(4));

    static extractNumber = (str: string) => {
        if (!str) return 0;
        const numericString = str.replace(/[^0-9.]/g, '');
        return Number(numericString);
    };

    static extractAlphanumeric = (text: string): string => {
        return text.replace(/[^a-zA-Z0-9]/g, '');
    };
}