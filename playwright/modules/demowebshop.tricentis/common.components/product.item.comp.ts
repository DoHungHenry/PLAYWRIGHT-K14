import { BaseComponent } from "@modules/base.components/base.component";
import {Locator} from "@playwright/test";

export class ProductItemComponent extends BaseComponent {

    public static selector = '.product-item';

    constructor(private component: Locator) {
        super(component.page());
        this.component = component;
    };

    productTitle = (): Locator => this.component.locator('.product-title');
    productPrice = (): Locator => this.component.locator('span[class*="actual-price"]');
}