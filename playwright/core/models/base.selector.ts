export function compSlt(selectorValue: any) {
    return function (target: any) {
        target.selectorValue = selectorValue;
    };
}