import { BaseComponent } from "@core/models/base.component";
import { Locator, Page } from "@playwright/test";

export class ProductItemComp extends BaseComponent {

    public static compSlt = '.product-item';

    constructor(private compLct: Locator) {
        super(compLct.page());
        this.compLct = compLct;
    };

    productTitle = (): Locator => this.findLctByLct(this.compLct, '.product-title');
    productPrice = (): Locator => this.findLctByLct(this.compLct, 'span[class*="actual-price"]');
}