import { BaseComponent } from "@modules/base.components/base.component";
import {Locator, Page} from "@playwright/test";

export class ProductItemComponent extends BaseComponent {

    public static selector = '.product-item';

    constructor(page: Page, private component: Locator) {
        super(page);
        this.component = component;
    };

    productTitle = (): Locator => this.findLctByLct(this.component, '.product-title');
    productPrice = (): Locator => this.findLctByLct(this.component, 'span[class*="actual-price"]');
}