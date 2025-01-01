import { Locator } from "@playwright/test";
import { FooterColumnComp } from "./footer.column.comp";

export class MyAccountColumnComp extends FooterColumnComp {

    public static componentSelector = '.column.my-account';

    constructor(componentLocator: Locator) {
        super(componentLocator);
    };
}