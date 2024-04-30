import { Locator } from "@playwright/test";
import { compSlt } from "@core/models";
import { FooterGenericComp } from "./footer.generic.comp";

@compSlt(".column.customer-service")
export class CustomerServiceColumnComp2 extends FooterGenericComp {

    constructor(compLct: Locator) {
        super(compLct);
    };
}