import { Locator, Page } from "@playwright/test";
import { FooterColumnComponent } from "./footer.column.comp";

export class FollowUsColumnComponent extends FooterColumnComponent {

    public static componentSelector = '.column.follow-us';

    constructor(
        page: Page,
        protected readonly componentLocator: Locator,
    ) {
        super(page, componentLocator);
    }
}