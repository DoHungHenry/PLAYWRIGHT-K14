import { BasePage } from "@core/models/base.page";
import { Locator } from "@playwright/test";

export type DropdownCompChildClass<D extends DropdownComp> = new (compLct: Locator) => D;

export abstract class DropdownComp extends BasePage {

    constructor(public compLct: Locator) {
        super(compLct.page());
        this.compLct = compLct;
    };

    abstract selectOption(option: unknown): Promise<void>;

    abstract selectOptions(options: unknown[]): Promise<void>;

    abstract getSelectedOption(): Promise<unknown>;

    abstract getSelectedOptions(): Promise<unknown[]>;
}