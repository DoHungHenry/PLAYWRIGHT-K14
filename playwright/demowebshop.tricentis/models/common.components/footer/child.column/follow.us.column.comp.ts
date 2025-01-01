import { Locator } from "@playwright/test";
import { FooterColumnComp } from "./footer.column.comp";

export class FollowUsColumnComp extends FooterColumnComp {

    public static componentSelector = '.column.follow-us';

    constructor(componentLocator: Locator) {
        super(componentLocator);
    };
}