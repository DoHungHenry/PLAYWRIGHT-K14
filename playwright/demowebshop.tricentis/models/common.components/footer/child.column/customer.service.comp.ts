import { Locator } from "@playwright/test";
import { FooterColumnComponent } from "./footer.column.comp";

export class CustomerServiceColumnComponent extends FooterColumnComponent {

    public static componentSelector = '.column.customer-service';

    constructor(componentLocator: Locator) {
        super(componentLocator);
    };
}