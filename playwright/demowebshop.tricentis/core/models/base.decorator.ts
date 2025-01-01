

export class BaseDecorator {
    appendComponentSelector(componentSelector: any) {
        return function (target: any) {
            target.componentSelector = componentSelector;
        }
    };
    
    appendPageUrl(url: any) {
        return function (target: any) {
            target.url = url;
        }
    };
    
    appendComponentType(type: any) {
        return function (target: any) {
            target.type = type;
        }
    }
}