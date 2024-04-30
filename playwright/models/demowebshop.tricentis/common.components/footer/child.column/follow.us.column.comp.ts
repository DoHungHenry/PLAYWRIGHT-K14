import { Locator } from "@playwright/test";
import { FooterColumnComp } from "./footer.column.comp";

export class FollowUsColumnComp extends FooterColumnComp {

    public static compSlt = '.column.follow-us';

    constructor(compLct: Locator) {
        super(compLct);
    };
}