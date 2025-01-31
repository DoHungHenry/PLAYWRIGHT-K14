import { Locator, Page } from "@playwright/test";
import { BasePage } from "demowebshop.tricentis/core/models/base.page";

export class ProductItemComponent extends BasePage {

    public static componentSelector = '.product-item';

    constructor(
        page: Page,
        protected readonly componentLocator: Locator,
    ) {
        super(page);
    };

    productTitle = async (): Promise<Locator> => await this.findLocator('.product-title', { parentLocator: this.componentLocator });
    productPrice = async (): Promise<Locator> => await this.findLocator('span[class*="actual-price"]', { parentLocator: this.componentLocator });
}