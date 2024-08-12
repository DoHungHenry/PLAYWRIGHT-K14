import { NumberHelper } from "@core/utilities";
import { expect, Locator, Page } from "@playwright/test";
import { ConfirmDialogComp, ConfirmDialogCompChildClass } from "./common.components/confirm.dialog/confirm.dialog.abstract.comp";
import { DateTimePickerComp, DateTimePickerCompChildClass } from "./common.components/date.time/date.time.picker.abstract.comp";
import { DropdownComp, DropdownCompChildClass } from "./common.components/dropdown/dropdown.abstract.comp";
import { ToggleSwitchComp, ToggleSwitchCompChildClass } from "./common.components/toggle.switch/toggle.switch.abstract.comp";

export class BasePage {
    page: Page;
    locatorTimeout: number;
    frameLocatorTimeout: number;
    locatorsTimeout: number;
    baseCompLct: Locator;

    constructor(page: Page) {
        this.page = page;
        this.baseCompLct = this.page.locator('html');
        this.locatorTimeout = 3 * 1000;
        this.frameLocatorTimeout = 10 * 1000;
        this.locatorsTimeout = 60 * 1000;
    };

    findLocator = async (
        selectorOrLocator: string | Locator,
        options?: {
            frame?: string,
            parentSlt?: string,
            parentLct?: Locator,
            role?: RoleLocator,
            isOptionalLct?: boolean, // if true: this locator may not exist in the DOM, then return locator or null
            hasChildLct?: Locator,
            hasText?: string | RegExp
        },
    ): Promise<Locator> => {
        const hasOptions = {
            has: options?.hasChildLct,
            hasText: options?.hasText
        };

        if (options?.frame) {

            if (options?.parentSlt) {
                if (options?.role) {
                    const locator = this.page.locator(options.parentSlt).frameLocator(options.frame).locator(this.getSelectorByRole(selectorOrLocator.toString(), options.role), hasOptions);
                    return await this.waitAndReturnFrameLocator(locator, options?.isOptionalLct);
                };

                const locator = this.page.locator(options.parentSlt).frameLocator(options.frame).locator(selectorOrLocator, hasOptions);
                return await this.waitAndReturnFrameLocator(locator, options?.isOptionalLct);
            };

            if (options?.parentLct) {
                if (options?.role) {
                    const locator = options.parentLct.frameLocator(options.frame).locator(this.getSelectorByRole(selectorOrLocator.toString(), options.role), hasOptions);
                    return await this.waitAndReturnFrameLocator(locator, options?.isOptionalLct);
                };

                const locator = options.parentLct.frameLocator(options.frame).locator(selectorOrLocator, hasOptions);
                return await this.waitAndReturnFrameLocator(locator, options?.isOptionalLct);
            };

            if (options?.role) {
                const locator = this.page.frameLocator(options.frame).locator(this.getSelectorByRole(selectorOrLocator.toString(), options.role), hasOptions);
                return await this.waitAndReturnFrameLocator(locator, options?.isOptionalLct);
            };

            const locator = this.page.frameLocator(options.frame).locator(selectorOrLocator, hasOptions);
            return await this.waitAndReturnFrameLocator(locator, options?.isOptionalLct);
        };

        if (options?.parentSlt) {
            if (options?.role) {
                const locator = this.page.locator(options.parentSlt).locator(this.getSelectorByRole(selectorOrLocator.toString(), options.role), hasOptions);
                return await this.waitAndReturnLocator(locator, options?.isOptionalLct);
            };

            const locator = this.page.locator(options.parentSlt).locator(selectorOrLocator, hasOptions);
            return await this.waitAndReturnLocator(locator, options?.isOptionalLct);
        };

        if (options?.parentLct) {
            if (options?.role) {
                const locator = options.parentLct.locator(this.getSelectorByRole(selectorOrLocator.toString(), options.role), hasOptions);
                return await this.waitAndReturnLocator(locator, options?.isOptionalLct);
            };

            const locator = options.parentLct.locator(selectorOrLocator, hasOptions);
            return await this.waitAndReturnLocator(locator, options?.isOptionalLct);
        };

        if (options?.role) {
            const locator = this.page.locator(this.getSelectorByRole(selectorOrLocator.toString(), options.role), hasOptions);
            return await this.waitAndReturnLocator(locator, options?.isOptionalLct);
        };

        const locator = this.page.locator(selectorOrLocator.toString(), hasOptions);
        return await this.waitAndReturnLocator(locator, options?.isOptionalLct);
    };

    findLocators = async (
        selectorOrLocator: string | Locator,
        options?: {
            frame?: string,
            parentSlt?: string,
            parentLct?: Locator,
            role?: RoleLocator,
            hasChildLct?: Locator,
            hasText?: string | RegExp
        },
    ): Promise<Locator[]> => {

        const hasOptions = {
            has: options?.hasChildLct,
            hasText: options?.hasText
        };

        if (options?.frame) {
            if (options?.role) {
                const locators = await this.page.frameLocator(options.frame).locator(this.getSelectorByRole(selectorOrLocator.toString(), options.role), hasOptions).all();
                await Promise.all(locators.map(locator => locator.waitFor({ state: 'attached', timeout: this.locatorsTimeout })));
                return locators.length > 0 ? locators : [];
            };

            const locators = await this.page.frameLocator(options.frame).locator(selectorOrLocator, hasOptions).all();
            await Promise.all(locators.map(locator => locator.waitFor({ state: 'attached', timeout: this.locatorsTimeout })));
            return locators.length > 0 ? locators : [];
        };

        if (options?.parentSlt) {
            if (options?.role) {
                const locators = await this.page.locator(options.parentSlt).locator(this.getSelectorByRole(selectorOrLocator.toString(), options.role), hasOptions).all();
                await Promise.all(locators.map(locator => locator.waitFor({ state: 'attached', timeout: this.locatorsTimeout })));
                return locators.length > 0 ? locators : [];
            };

            const locators = await this.page.locator(options.parentSlt).locator(selectorOrLocator, hasOptions).all();
            await Promise.all(locators.map(locator => locator.waitFor({ state: 'attached', timeout: this.locatorsTimeout })));
            return locators.length > 0 ? locators : [];
        };

        if (options?.parentLct) {
            if (options?.role) {
                const locators = await options.parentLct.locator(this.getSelectorByRole(selectorOrLocator.toString(), options.role), hasOptions).all();
                await Promise.all(locators.map(locator => locator.waitFor({ state: 'attached', timeout: this.locatorsTimeout })));
                return locators.length > 0 ? locators : [];
            };

            const locators = await options.parentLct.locator(selectorOrLocator, hasOptions).all();
            await Promise.all(locators.map(locator => locator.waitFor({ state: 'attached', timeout: this.locatorsTimeout })));
            return locators.length > 0 ? locators : [];
        };

        if (options?.role) {
            const locators = await this.page.locator(this.getSelectorByRole(selectorOrLocator.toString(), options.role), hasOptions).all();
            await Promise.all(locators.map(locator => locator.waitFor({ state: 'attached', timeout: this.locatorsTimeout })));
            return locators.length > 0 ? locators : [];
        };

        const locators = await this.page.locator(selectorOrLocator.toString(), hasOptions).all();
        await Promise.all(locators.map(locator => locator.waitFor({ state: 'attached', timeout: this.locatorsTimeout })));
        return locators.length > 0 ? locators : [];
    };

    gotoUrl = async (url: string) => {
        await this.page.goto(url, { timeout: 30000 });
        await this.page.waitForTimeout(5000);
    };

    clickOnLct = async (locator: Locator): Promise<void> => {
        if (locator === null) {
            throw new Error(`Input locator is null: ${locator}`);
        } else {
            await locator.click({ force: true });
            await this.page.waitForTimeout(500);
        };
    };

    clickClearFill = async (locator: Locator, inputText: string) => {
        if (locator === null) {
            throw new Error(`Input locator is null: ${locator}`);
        } else {
            await locator.waitFor({ state: 'visible' });
            await this.clickOnLct(locator);
            await locator.clear();
            await locator.fill(inputText, { force: true });
            await this.page.waitForTimeout(500);
        };
    };

    getLctTextContent = async (locator: Locator): Promise<string> => {
        if (!locator) return null;
        const text = (await locator.textContent()).trim();
        return text.includes('Not Set') ? null : text;
    };

    getLctsTextContent = async (locators: Locator[]): Promise<string[]> => {
        if (locators.length === 0) return [];
        return await Promise.all(locators.map(async locator => (await locator.textContent()).trim()));
    };

    getLctAttribute = async (locator: Locator, attribute: string): Promise<string> => locator ? (await locator.getAttribute(attribute)).trim() : null;

    getLctNumber = async (locator: Locator): Promise<number> => locator ? NumberHelper.extractNumber(await this.getLctTextContent(locator)) : 0;

    /**
     * Interact with Input Lct
     */
    getStringOfInput = async (locator: Locator): Promise<string> => locator ? (await locator.inputValue()).trim() : null;

    getNumberOfInput = async (locator: Locator): Promise<number> => locator ? NumberHelper.extractNumber(await locator.inputValue()) : 0;

    setStringToInput = async (locator: Locator, inputString: string): Promise<void> => locator ? await this.clickClearFill(locator, inputString) : console.log(`Invalid input locator: ${locator}`);

    setNumberToInput = async (locator: Locator, inputNumber: number): Promise<void> => locator ? await this.clickClearFill(locator, inputNumber.toString()) : console.log(`Invalid input locator: ${locator}`);

    /**
     * Interact with Textarea Lct
     */
    getStringOfTextarea = async (locator: Locator): Promise<string> => locator ? (await locator.inputValue()).trim() : null;

    getNumberOfTextarea = async (locator: Locator): Promise<number> => locator ? NumberHelper.extractNumber(await locator.inputValue()) : 0;

    setStringToTextarea = async (locator: Locator, inputString: string): Promise<void> => locator ? await this.clickClearFill(locator, inputString) : console.log(`Invalid input locator: ${locator}`);

    setNumberToTextarea = async (locator: Locator, inputNumber: number): Promise<void> => locator ? await this.clickClearFill(locator, inputNumber.toString()) : console.log(`Invalid input locator: ${locator}`);

    /**
     * Interact with abstract ToggleSwitchComp
     * Note: trigger Component before call this method if it's not InlineEditor
     */

    toggleSwitchComp = async <S extends ToggleSwitchComp>(childClass: ToggleSwitchCompChildClass<S>, parentLct: Locator): Promise<S> => {
        if (!childClass) throw new Error(`Invalid childClass: ${childClass}`);
        const compLct = await this.findLocator((childClass as any).compSlt, { parentLct: parentLct });
        return new childClass(compLct);
    };

    /**
     * Interact with abstract DropdownComp
     * Note: trigger Component before call this method if it's not InlineEditor
     */
    dropdownComp = async <D extends DropdownComp>(childClass: DropdownCompChildClass<D>, parentLct: Locator): Promise<D> => {
        if (!childClass) throw new Error(`Invalid childClass: ${childClass}`);
        const compLct = await this.findLocator((childClass as any).compSlt, { parentLct: parentLct });
        return new childClass(compLct);
    };

    /**
     * Interact with abstract DateTimePickerComp
     * Note: trigger Component before call this method if it's not InlineEditor
     */

    dateTimePickerComp = async <DT extends DateTimePickerComp>(childClass: DateTimePickerCompChildClass<DT>, parentLct: Locator): Promise<DT> => {
        if (!childClass) throw new Error(`Invalid childClass: ${childClass}`);
        const compLct = await this.findLocator((childClass as any).compSlt, { parentLct: parentLct });
        return new childClass(compLct);
    };

    /**
     * Init abstract ConfirmDialogComp
     */
    confirmDialogComp = async <C extends ConfirmDialogComp>(childClass: ConfirmDialogCompChildClass<C>): Promise<C> => {
        if (!childClass) throw new Error(`Invalid childClass: ${childClass}`);
        const compLct = await this.findLocator((childClass as any).compSlt);
        return new childClass(compLct);
    };


    /**
    * Clicks on the specified locator on the page and waits for a new page to open in a popup as new browser tab.
    * @param page The current page object.
    * @param lctOn1stPage The locator to click on the page.
    * @returns A promise that resolves to the new page object opened in the popup.
    */
    public async newPagePopupOnClick(page: Page, lctOn1stPage: Locator): Promise<Page> {
        await lctOn1stPage.waitFor({ state: 'visible', timeout: 10000 });
        const [newPage] = await Promise.all([
            page.waitForEvent('popup', { timeout: 10000 }),
            await this.clickOnLct(lctOn1stPage),
            page.waitForTimeout(2000)
        ]);
        return newPage;
    };

    assertLctToBeVisible = (locator: Locator): Promise<void> => expect(locator).toBeVisible();
    assertLctToContainText = (locator: Locator, text: string): Promise<void> => expect(locator).toContainText(text);
    assertTabNavToBeActive = async (locator: Locator): Promise<void> => expect(await locator.getAttribute('class')).toContain('active');

    isTabActive = async (locator: Locator): Promise<boolean | null> => locator ? (await locator.getAttribute('class')).includes('active') : null;

    private waitAndReturnLocator = async (locator: Locator, isOptionalLct?: boolean): Promise<Locator> => {
        try {
            await locator.waitFor({ state: 'attached', timeout: this.locatorTimeout });
            // await locator.waitFor({ state: 'attached' });
            const locatorCount = await locator.count();
            if (locatorCount === 1) return locator;
        } catch {
            const locatorCount = await locator.count();
            if (locatorCount > 1) {
                throw new Error(`Strict mode violation, resolved to ${locatorCount} locators: ${locator}!`);
            } else {
                if (isOptionalLct) {
                    console.log(`Optional locator is not found, returns null by default: ${locator}!`);
                    return null;
                } else {
                    throw new Error(`There is ${locatorCount} locator found: ${locator}!`);
                };
            };
        };
    };

    private waitAndReturnFrameLocator = async (locator: Locator, isOptionalLct?: boolean): Promise<Locator> => {
        try {
            await locator.waitFor({ state: 'attached', timeout: this.frameLocatorTimeout });
            const locatorCount = await locator.count();
            if (locatorCount === 1) return locator;
        } catch {
            const locatorCount = await locator.count();
            if (locatorCount > 1) {
                throw new Error(`Strict mode violation, resolved to ${locatorCount} locators: ${locator}!`);
            } else {
                if (isOptionalLct) {
                    console.log(`Optional locator is not found, returns null by default: ${locator}!`);
                    return null;
                } else {
                    throw new Error(`There is ${locatorCount} locator found: ${locator}!`);
                };
            };
        };
    };

    private getSelectorByRole = (text: string, role: RoleLocator): string => {
        switch (role) {
            /**
            * HTML template: 
            * <label>text</label>
            */
            case 'label': return `label:text-is("${text}")`;

            /**
            * HTML template: 
            * <label>text</label>
            * <div class="value">...</div>
            */
            case 'labelValue': return `label:text-is("${text}") + div.value`;

            /**
            * HTML template: 
            * <label>text</label>
            * <div class="value">...</div>
            */
            case 'labelValueInput': return `label:text-is("${text}") + div.value input`;

            /**
            * HTML template: 
            * <label>text</label>
            * <div class="value">
            *       <input>
            * </div>
            */
            case 'labelValueTextarea': return `label:text-is("${text}") + div.value textarea`;

            /**
             * HTML template: <legend>text</legend>
             */
            case 'legend': return `legend:text-is("${text}")`;

            /**
             * HTML template: 
             * <legend>text</legend>
             * <div class="value">...</div>
             */
            case 'legendValue': return `legend:text-is("${text}") + div.value`;

            /**
             * HTML template: 
             * <legend>text</legend>
             * <div class="field">
             *      <div class="value">...</div>
             * </div>
             */
            case 'legendFieldValue': return `legend:text-is("${text}") + div.field > div.value`;

            /**
            * HTML template: 
            * <div class="title">Draft</div>
            */
            case 'title': return `div.title:text-is("${text}")`;

            /**
            * HTML template: 
            * <div class="title">Draft</div>
            * <div class="value">0</div>
            */
            case 'titleValue': return `div.title:text-is("${text}") + div.value`;

            /**
             * HTML template: <button>text</button>
             */
            case 'textButton': return `button:text-is("${text}")`;

            /**
             * HTML template: <ul><li><a>text</a></li></ul>
             */
            case 'tabListNavBar': return `ul.nav-tabs li:has-text("${text}")`; // nearest parent: ul.nav-tabs

            /**
             * HTML template: 
             * <tabs>
             *      <div class="button-tabs">
             *          <button><span>text</span></button>
             *      </div>
             * </tabs>
             */
            case 'tabButtonNavBar': return `button span:text-is("${text}")`; // nearest parent: div.button-tabs

            /**
             * HTML template: 
             * <legend>Invoice Summary</legend>
             * <div class="invoice-summary__line">Sub Total <span class="value">$3,000.00</span></div>
             */
            case 'financeSummaryLine': return `legend:text-is("Invoice Summary") ~ div.invoice-summary__line:text-is("${text}")`;

            /**
             * HTML template: 
             * <label>Total Amount</label>
             * <div class="amount">$3,300.00</div>
             */
            case 'labelAmount': return `label:text-is("${text}") + div.amount`;

            /**
             * HTML template: 
             * <strong>text</strong>
             * <strong class="value">...</strong>
             */
            case 'strongValue': return `strong:text-is("${text}") + strong.value`;

            default: return null;
        };
    };
}

export enum RoleLocator {
    label = 'label',
    labelValue = 'labelValue',
    labelValueInput = 'labelValueInput',
    labelValueTextarea = 'labelValueTextarea',
    legend = 'legend',
    legendValue = 'legendValue',
    legendFieldValue = 'legendFieldValue',
    title = 'title',
    titleValue = 'titleValue',
    textButton = 'textButton',
    tabListNavBar = 'tabListNavBar',
    tabButtonNavBar = 'tabButtonNavBar',
    financeSummaryLine = 'financeSummaryLine',
    labelAmount = 'labelAmount',
    strongValue = 'strongValue',
};