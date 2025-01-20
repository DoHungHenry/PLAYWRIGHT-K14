import { Locator, Page } from "@playwright/test";
import { FooterColumnComponent } from "./footer.column.comp";

export class CustomerServiceColumnComponent extends FooterColumnComponent {

    public static componentSelector = '.column.customer-service';

    constructor(
        page: Page,
        protected readonly componentLocator: Locator,
    ) {
        super(page, componentLocator);
    }
}