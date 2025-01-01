import { Locator } from "@playwright/test";
import { FooterColumnComp } from "./footer.column.comp";

export class InfoColumnComp extends FooterColumnComp {

    public static componentSelector = '.column.information';

    constructor(componentLocator: Locator) {
        super(componentLocator);
    };
}