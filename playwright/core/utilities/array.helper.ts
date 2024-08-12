export class ArrayHelper {
    static areEqual = (arr1: string[], arr2: string[]): boolean => {
        const arr1Length = arr1.length
        const arr2Length = arr2.length

        arr1Length === arr2Length ? true : false

        const sortedArr1 = arr1.sort();
        const sortedArr2 = arr2.sort();

        for (let i = 0; i < arr1Length; i++) {
            if (sortedArr1[i] !== sortedArr2[i]) {
                return false;
            }
        }

        return true;
    };

    static selectRandomElement = (arr: any[]): any => arr[Math.floor(Math.random() * arr.length)];
}