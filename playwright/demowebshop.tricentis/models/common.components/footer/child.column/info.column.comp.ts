import { Locator, Page } from "@playwright/test";
import { FooterColumnComponent } from "./footer.column.comp";
import { IFooterColumnComponent } from "../footer.comp";
import { BasePage } from "@demowebshop.tricentis/core/models";

export class InfoColumnComponent extends FooterColumnComponent implements IFooterColumnComponent {

    public static componentSelector = '.column.information';

    constructor(
        page: Page,
        protected readonly componentLocator: Locator,
    ) {
        super(page, componentLocator);
    }
}