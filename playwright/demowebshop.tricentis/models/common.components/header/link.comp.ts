import { BasePage } from "@core/models";
import { Locator } from "@playwright/test";

export class LinkComponent extends BasePage {

    public static componentSelector = '.header-links-wrapper';

    constructor(private componentLocator: Locator) {
        super(componentLocator.page());
        this.componentLocator = componentLocator;
    };

    linkLcts = async (): Promise<Locator[]> => await this.findLocators(this.componentLocator);
};