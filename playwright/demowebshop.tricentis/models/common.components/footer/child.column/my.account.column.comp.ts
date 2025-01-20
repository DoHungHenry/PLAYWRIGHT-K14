import { Locator, Page } from "@playwright/test";
import { FooterColumnComponent } from "./footer.column.comp";

export class MyAccountColumnComponent extends FooterColumnComponent {

    public static componentSelector = '.column.my-account';

    constructor(
        page: Page,
        protected readonly componentLocator: Locator,
    ) {
        super(page, componentLocator);
    }
}