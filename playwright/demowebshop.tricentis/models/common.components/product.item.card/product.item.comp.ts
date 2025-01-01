import { BasePage } from "@core/models";
import { Locator } from "@playwright/test";

export class ProductItemComp extends BasePage {

    public static componentSelector = '.product-item';

    constructor(private componentLocator: Locator) {
        super(componentLocator.page());
        this.componentLocator = componentLocator;
    };

    productTitle = async (): Promise<Locator> => await this.findLocator('.product-title', this.componentLocator);
    productPrice = async (): Promise<Locator> => await this.findLocator('span[class*="actual-price"]', this.componentLocator);
}