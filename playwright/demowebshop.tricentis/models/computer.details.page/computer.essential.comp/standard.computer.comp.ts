import { Locator } from "@playwright/test";
import { ComputerEssentialComponent } from "./computer.essential.comp";

export class StandardComputerComponent extends ComputerEssentialComponent {

    static componentSelector: string = '.product-essential';

    constructor(componentLocator: Locator) {
        super(componentLocator);
    };

    selectProcessorType = async (type: string): Promise<void> => {
        const componentSelector = (this.constructor as any).componentSelector;
        console.log(componentSelector);

        const optionLcts = await this.findLocators(
            'label:text-is("Processor"):parent + div option',
            { parentLocator: componentSelector }
        );
        const optionLct = optionLcts.find(async (lct) => (await lct.textContent()).includes(type));
        await this.clickOnLocator(optionLct);
    };

    selectRAMType = async (type: string): Promise<void> => {
        const optionLcts = await this.findLocators('label:text-is("RAM"):parent + div option')
        const optionLct = optionLcts.find(async (lct) => (await lct.textContent()).includes(type));
        await this.clickOnLocator(optionLct);
    };
}