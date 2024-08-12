import { BasePage } from "@core/models";
import { Locator } from "@playwright/test";

export abstract class ComputerEssentialComp extends BasePage {

    public compLct: Locator;

    protected constructor(compLct: Locator) {
        super(compLct.page());
        this.compLct = compLct;
    };

    abstract selectProcessorType(type: string): Promise<void>;
    abstract selectRAMType(type: string): Promise<void>;
    selectHDDType = async (type: string): Promise<void> => await this.selectCompOption(type);
    selectSoftwareType = async (type: string): Promise<void> => await this.selectCompOption(type);
    selectOSType = async (type: string): Promise<void> => await this.selectCompOption(type);

    protected async selectCompOption(type: string): Promise<void> {
        // const optionLcts = await this.findLocators(`label:has-text("${type}"):parent + dd option`);
        const optionLcts = await this.findLocators(`//label[contains(text(), "${type}")]`);
        const optionLct = optionLcts.find(async lct => (await lct.textContent()).includes(type));
        await this.click(optionLct);
    }
}