import { Locator } from "@playwright/test";
import { FooterColumnComponent } from "./footer.column.comp";

export class FollowUsColumnComponent extends FooterColumnComponent {

    public static componentSelector = '.column.follow-us';

    constructor(componentLocator: Locator) {
        super(componentLocator);
    };
}