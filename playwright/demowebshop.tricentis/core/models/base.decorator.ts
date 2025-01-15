
export function appendComponentSelector(componentSelector: any) {
    return function (target: any) {
        target.componentSelector = componentSelector;
    }
};

export function appendPageUrl(url: any) {
    return function (target: any) {
        target.url = url;
    }
};

export function appendComponentType(type: any) {
    return function (target: any) {
        target.type = type;
    }
}
