import { Locator } from "@playwright/test";
import { FooterColumnComp } from "./footer.column.comp";

export class CustomerServiceColumnComp extends FooterColumnComp {

    public static compSlt = '.column.customer-service';

    constructor(compLct: Locator) {
        super(compLct);
    };
}