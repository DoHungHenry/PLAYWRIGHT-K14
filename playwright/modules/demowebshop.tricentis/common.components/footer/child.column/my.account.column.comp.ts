import { Locator } from "@playwright/test";
import { FooterColumnComp } from "../common.column/footer.column.comp";

export class MyAccountColumnComp extends FooterColumnComp {

    public static compSlt = '.column.my-account';

    constructor(compLct: Locator) {
        super(compLct);
    };
}