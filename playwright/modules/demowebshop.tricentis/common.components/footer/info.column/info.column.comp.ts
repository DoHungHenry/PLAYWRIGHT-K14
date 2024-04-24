import { Locator } from "@playwright/test";
import { FooterColumnComp } from "../common.column/footer.column.comp";

export class InfoColumnComp extends FooterColumnComp {

    public static compSlt = '.column.information';
    
    constructor(compLct: Locator) {
        super(compLct);
    };
}