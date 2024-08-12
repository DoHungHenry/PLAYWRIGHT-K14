import { BasePage } from "@core/models";
import { Locator } from "@playwright/test";

export class ProductItemComp extends BasePage {

    public static compSlt = '.product-item';

    constructor(private compLct: Locator) {
        super(compLct.page());
        this.compLct = compLct;
    };

    productTitle = async (): Promise<Locator> => await this.findLocator('.product-title', this.compLct);
    productPrice = async (): Promise<Locator> => await this.findLocator('span[class*="actual-price"]', this.compLct);
}