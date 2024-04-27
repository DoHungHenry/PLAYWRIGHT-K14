import { Locator } from "@playwright/test";
import { compSlt } from "@core/models";
import { ComputerEssentialComp } from "./computer.essential.comp";

@compSlt(".class.cheap")
export class CheapComputerComp extends ComputerEssentialComp {

    constructor(compLct: Locator) {
        super(compLct);
    };

    selectProcessorType(type: string): Promise<void> {
        console.log("this is selectProcessorType method from CheapComputerComp class");
        return Promise.resolve(undefined);
    };

    selectRAMType(type: string): Promise<void> {
        console.log("this is selectRAMType method from CheapComputerComp class");
        return Promise.resolve(undefined);
    };
}