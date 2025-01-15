import { Locator } from "@playwright/test";
import { FooterColumnComponent } from "./footer.column.comp";

export class MyAccountColumnComponent extends FooterColumnComponent {

    public static componentSelector = '.column.my-account';

    constructor(componentLocator: Locator) {
        super(componentLocator);
    };
}