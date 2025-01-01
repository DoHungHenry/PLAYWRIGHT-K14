import { Locator } from "@playwright/test";
import { FooterColumnComp } from "./footer.column.comp";

export class CustomerServiceColumnComp extends FooterColumnComp {

    public static componentSelector = '.column.customer-service';

    constructor(componentLocator: Locator) {
        super(componentLocator);
    };
}