import { Locator } from "@playwright/test";
import { compSlt } from "@core/models";
import { ComputerEssentialComp } from "./computer.essential.comp";

@compSlt(".class.standard")
export class StandardComputerComp extends ComputerEssentialComp {

    constructor(compLct: Locator) {
        super(compLct);
    };

    selectProcessorType(type: string): Promise<void> {
        console.log('this is selectProcessorType method from StandardComputerComp class');
        return Promise.resolve(undefined);
    };

    selectRAMType(type: string): Promise<void> {
        console.log('this is selectRAMType method from StandardComputerComp class');
        return Promise.resolve(undefined);
    };
}