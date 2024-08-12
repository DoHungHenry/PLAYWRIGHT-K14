import { BasePage } from "@core/models/base.page";
import { Locator } from "@playwright/test";

export type ToggleSwitchCompChildClass<S extends ToggleSwitchComp> = new (compLct: Locator) => S;

export abstract class ToggleSwitchComp extends BasePage {

    constructor(public compLct: Locator) {
        super(compLct.page());
        this.compLct = compLct;
    };

    abstract getSwitchState(): Promise<boolean>;
    abstract setSwitchState(inputState: boolean): Promise<void>;
};