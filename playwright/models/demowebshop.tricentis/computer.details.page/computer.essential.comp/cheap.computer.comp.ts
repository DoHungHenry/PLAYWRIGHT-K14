import { Locator } from "@playwright/test";
import { compSlt } from "@core/models";
import { ComputerEssentialComp } from "./computer.essential.comp";

@compSlt(".class.cheap")
export class CheapComputerComp extends ComputerEssentialComp {

    constructor(compLct: Locator) {
        super(compLct);
    };

    selectProcessorType(type: string): Promise<void> {
        return Promise.resolve(undefined);
    };

    selectRAMType(type: string): Promise<void> {
        return Promise.resolve(undefined);
    };
}