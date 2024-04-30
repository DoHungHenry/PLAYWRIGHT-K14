import { BaseComponent } from "@core/models";
import { Locator } from "@playwright/test";

export abstract class ComputerEssentialComp extends BaseComponent {

    protected constructor(compLct: Locator) {
        super(compLct.page());
    };

    public abstract selectProcessorType(type: string): Promise<void>;
    public abstract selectRAMType(type: string): Promise<void>;
}