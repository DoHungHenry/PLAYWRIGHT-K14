import { Locator } from "@playwright/test";
import { FooterColumnComponent } from "./footer.column.comp";

export class InfoColumnComponent extends FooterColumnComponent {

    public static componentSelector = '.column.information';

    constructor(componentLocator: Locator) {
        super(componentLocator);
    };
}