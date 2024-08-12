import { BasePage } from "@core/models/base.page";
import { Locator } from "@playwright/test";

export type ConfirmDialogCompChildClass<C extends ConfirmDialogComp> = new (compLct: Locator) => C;

export abstract class ConfirmDialogComp extends BasePage {

    constructor(public compLct: Locator) {
        super(compLct.page());
        this.compLct = compLct;
    };

    abstract isConfirmDialogPoppedUp(): Promise<boolean>;
    abstract confirm(): Promise<void>;
    abstract cancel(): Promise<void>;
};