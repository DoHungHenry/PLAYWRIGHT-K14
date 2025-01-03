import { BasePage } from "@core/models";
import { Locator } from "@playwright/test";

export class LogoComp extends BasePage {

    public static componentSelector = '.header-logo';

    constructor(private componentLocator: Locator) {
        super(componentLocator.page());
        this.componentLocator = componentLocator;
    };
}