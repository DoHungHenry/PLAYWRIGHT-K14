import { BrowserContext, expect, Locator, Page } from "@playwright/test";
import { NumberHelper } from "../utilities/number.helper";


interface BasePageConstructor<T extends BasePage> {
    new(
        page: Page, 
        ...args: any[]
    ): T;
}

interface FindLocatorOptions {
    frame?: string,
    parentSelector?: string,
    parentLocator?: Locator,
    role?: LocatorRole,
    isOptionalLocator?: boolean,
    scrollIntoView?: boolean,
    scrollIntoViewIfNeeded?: boolean,
    nthChild?: number,
    hasChildLocator?: Locator,
    hasText?: string | RegExp,
};

interface FindLocatorsOptions {
    frame?: string,
    parentSelector?: string,
    parentLocator?: Locator,
    role?: LocatorRole,
    hasChildLocator?: Locator,
    hasText?: string | RegExp,
}

export class BasePage {
    readonly baseUrl: string = process.env.BASE_URL;

    readonly locatorTimeout: number = 5 * 1000;
    readonly locatorsTimeout: number = 10 * 1000;
    readonly frameLocatorTimeout: number = 10 * 1000;

    readonly CILocatorTimeout: number = 10 * 1000;
    readonly CILocatorsTimeout: number = 20 * 1000;
    readonly CIFrameLocatorTimeout: number = 20 * 1000;

    constructor(
        protected page: Page,
    ) {};

    findLocator = async (
        selectorOrLocator: string | Locator,
        options?: FindLocatorOptions,
    ): Promise<Locator> => {

        options = options ?? {};

        const hasOptions = {
            has: options?.hasChildLocator,
            hasText: options?.hasText
        };

        options.isOptionalLocator = options?.isOptionalLocator ?? false;
        options.scrollIntoView = options?.scrollIntoView ?? false;
        options.scrollIntoViewIfNeeded = options?.scrollIntoViewIfNeeded ?? false;
        // options.nthChild = options?.nthChild ?? 1;

        if (options?.frame) {

            if (options?.parentSelector) {
                if (options?.role) {
                    const locator = this.page.locator(options.parentSelector).frameLocator(options.frame).locator(this.getSelectorByRole(selectorOrLocator.toString(), options.role), hasOptions);
                    return await this.waitAndReturnFrameLocator(locator, options);
                };

                const locator = this.page.locator(options.parentSelector).frameLocator(options.frame).locator(selectorOrLocator, hasOptions);
                return await this.waitAndReturnFrameLocator(locator, options);
            };

            if (options?.parentLocator) {
                if (options?.role) {
                    const locator = options.parentLocator.frameLocator(options.frame).locator(this.getSelectorByRole(selectorOrLocator.toString(), options.role), hasOptions);
                    return await this.waitAndReturnFrameLocator(locator, options);
                };

                const locator = options.parentLocator.frameLocator(options.frame).locator(selectorOrLocator, hasOptions);
                return await this.waitAndReturnFrameLocator(locator, options);
            };

            if (options?.role) {
                const locator = this.page.frameLocator(options.frame).locator(this.getSelectorByRole(selectorOrLocator.toString(), options.role), hasOptions);
                return await this.waitAndReturnFrameLocator(locator, options);
            };

            const locator = this.page.frameLocator(options.frame).locator(selectorOrLocator, hasOptions);
            return await this.waitAndReturnFrameLocator(locator, options);
        };

        if (options?.parentSelector) {
            if (options?.role) {
                const locator = this.page.locator(options.parentSelector).locator(this.getSelectorByRole(selectorOrLocator.toString(), options.role), hasOptions);
                return await this.waitAndReturnLocator(locator, options)
            };

            const locator = this.page.locator(options.parentSelector).locator(selectorOrLocator, hasOptions);
            return await this.waitAndReturnLocator(locator, options)
        };

        if (options?.parentLocator) {
            if (options?.role) {
                const locator = options.parentLocator.locator(this.getSelectorByRole(selectorOrLocator.toString(), options.role), hasOptions);
                return await this.waitAndReturnLocator(locator, options)
            };

            const locator = options.parentLocator.locator(selectorOrLocator, hasOptions);
            return await this.waitAndReturnLocator(locator, options)
        };

        if (options?.role) {
            const locator = this.page.locator(this.getSelectorByRole(selectorOrLocator.toString(), options.role), hasOptions);
            return await this.waitAndReturnLocator(locator, options)
        };

        const locator = this.page.locator(selectorOrLocator.toString(), hasOptions);
        return await this.waitAndReturnLocator(locator, options)
    };

    findLocators = async (
        selectorOrLocator: string | Locator,
        options?: FindLocatorsOptions
    ): Promise<Locator[]> => {

        const hasOptions = {
            has: options?.hasChildLocator,
            hasText: options?.hasText
        };

        if (options?.frame) {
            if (options?.role) {
                const locators = await this.page.frameLocator(options.frame).locator(this.getSelectorByRole(selectorOrLocator.toString(), options.role), hasOptions).all();
                return await this.waitAndReturnLocators(locators);
            };

            const locators = await this.page.frameLocator(options.frame).locator(selectorOrLocator, hasOptions).all();
            return await this.waitAndReturnLocators(locators);
        };

        if (options?.parentSelector) {
            if (options?.role) {
                const locators = await this.page.locator(options.parentSelector).locator(this.getSelectorByRole(selectorOrLocator.toString(), options.role), hasOptions).all();
                return await this.waitAndReturnLocators(locators);
            };

            const locators = await this.page.locator(options.parentSelector).locator(selectorOrLocator, hasOptions).all();
            return await this.waitAndReturnLocators(locators);
        };

        if (options?.parentLocator) {
            if (options?.role) {
                const locators = await options.parentLocator.locator(this.getSelectorByRole(selectorOrLocator.toString(), options.role), hasOptions).all();
                return await this.waitAndReturnLocators(locators);
            };

            const locators = await options.parentLocator.locator(selectorOrLocator, hasOptions).all();
            return await this.waitAndReturnLocators(locators);
        };

        if (options?.role) {
            const locators = await this.page.locator(this.getSelectorByRole(selectorOrLocator.toString(), options.role), hasOptions).all();
            return await this.waitAndReturnLocators(locators);
        };

        const locators = await this.page.locator(selectorOrLocator.toString(), hasOptions).all();
        return await this.waitAndReturnLocators(locators);
    };

    findComponent = async <C extends BasePage>(
        Class: BasePageConstructor<C>,
        options?: FindLocatorOptions,
        ...args: any[]
    ): Promise<C> => {
        if (!Class) throw new Error(`Invalid Class: ${Class}`);

        options = options ?? {};

        options.isOptionalLocator = options.isOptionalLocator ?? false;
        options.scrollIntoView = options?.scrollIntoView ?? false;
        options.scrollIntoViewIfNeeded = options?.scrollIntoViewIfNeeded ?? false;

        const hasOptions = {
            has: options?.hasChildLocator,
            hasText: options?.hasText
        };

        if (options?.parentSelector) {
            const componentLocator = await this.findLocator(
                (Class as any).componentSelector,
                { parentSelector: options.parentSelector, ...hasOptions }
            );

            return new Class(this.page, componentLocator, ...args);
        };

        if (options?.parentLocator) {
            const componentLocator = await this.findLocator(
                (Class as any).componentSelector,
                { parentLocator: options.parentLocator, ...hasOptions }
            );

            return new Class(this.page, componentLocator, ...args);
        };

        const componentLocator = await this.findLocator(
            (Class as any).componentSelector,
            { ...hasOptions }
        );

        return new Class(this.page, componentLocator, ...args);
    };

    findComponents = async <C extends BasePage>(
        Class: BasePageConstructor<C>,
        options?: FindLocatorsOptions,
        ...args: any[]
    ): Promise<C[]> => {

        const hasOptions = {
            has: options?.hasChildLocator,
            hasText: options?.hasText
        };

        if (options?.parentSelector) {
            const componentLocators = await this.findLocators(
                (Class as any).componentSelector,
                { parentSelector: options.parentSelector, ...hasOptions }
            );

            return componentLocators.length > 0
                ? componentLocators.map(componentLocator => { return new Class(this.page, componentLocator, ...args) })
                : [];
        };

        if (options?.parentLocator) {
            const componentLocators = await this.findLocators(
                (Class as any).componentSelector,
                { parentLocator: options.parentLocator, ...hasOptions }
            );

            return componentLocators.length > 0
                ? componentLocators.map(componentLocator => { return new Class(this.page, componentLocator, ...args) })
                : [];
        };

        const componentLocators = await this.findLocators(
            (Class as any).componentSelector,
            { ...hasOptions }
        );
        return componentLocators.length > 0
            ? componentLocators.map(componentLocator => { return new Class(this.page, componentLocator, ...args) })
            : [];
    }

    gotoUrl = async (url: string) => {
        await this.page.goto(url, { timeout: 30000, waitUntil: 'domcontentloaded' });
        await this.page.waitForTimeout(1000);
    };

    clickOnLocator = async (locator: Locator): Promise<void> => {
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
            await this.clickOnLocator(locator);
            await locator.clear();
            await locator.fill(inputText, { force: true });
            await this.page.waitForTimeout(500);
        };
    };

    getLocatorTextContent = async (locator: Locator): Promise<string> => {
        if (!locator) return null;

        const text = (await locator.textContent()).trim();
        return text.includes('Not Set') ? null : text;
    };

    getLocatorsTextContent = async (locators: Locator[]): Promise<string[]> => {
        if (locators.length === 0) return [];

        return await Promise.all(
            locators.map(async locator => (await locator.textContent()).trim())
        );
    };

    getLocatorAttribute = async (locator: Locator, attribute: string): Promise<string> =>
        locator ? (await locator.getAttribute(attribute)).trim() : null;

    getLocatorNumber = async (locator: Locator): Promise<number> =>
        locator ? NumberHelper.extractNumber(await this.getLocatorTextContent(locator)) : 0;

    /**
     * Interact with Input Lct
     */
    getStringOfInput = async (locator: Locator): Promise<string> => locator
        ? (await locator.inputValue()).trim()
        : null;

    getNumberOfInput = async (locator: Locator): Promise<number> => locator
        ? NumberHelper.extractNumber(await locator.inputValue())
        : 0;

    setStringToInput = async (locator: Locator, inputString: string): Promise<void> => locator
        ? await this.clickClearFill(locator, inputString)
        : console.log(`Invalid input locator: ${locator}`);

    setNumberToInput = async (locator: Locator, inputNumber: number): Promise<void> => locator
        ? await this.clickClearFill(locator, inputNumber.toString())
        : console.log(`Invalid input locator: ${locator}`);

    /**
     * Interact with Textarea Lct
     */
    getStringOfTextarea = async (locator: Locator): Promise<string> => locator
        ? (await locator.inputValue()).trim()
        : null;

    getNumberOfTextarea = async (locator: Locator): Promise<number> => locator
        ? NumberHelper.extractNumber(await locator.inputValue())
        : 0;

    setStringToTextarea = async (locator: Locator, inputString: string): Promise<void> => locator
        ? await this.clickClearFill(locator, inputString)
        : console.log(`Invalid input locator: ${locator}`);

    setNumberToTextarea = async (locator: Locator, inputNumber: number): Promise<void> => locator
        ? await this.clickClearFill(locator, inputNumber.toString())
        : console.log(`Invalid input locator: ${locator}`);


    /**
    * Clicks on the specified locator on the page and waits for a new page to open in a popup as new browser tab.
    * @param page The current page object.
    * @param lctOn1stPage The locator to click on the page.
    * @returns A promise that resolves to the new page object opened in the popup.
    */
    newPagePopupOnClick = async (page: Page, lctOn1stPage: Locator): Promise<Page> => {
        await lctOn1stPage.waitFor({ state: 'visible', timeout: 10000 });
        const [newPage] = await Promise.all([
            page.waitForEvent('popup', { timeout: 10000 }),
            await this.clickOnLocator(lctOn1stPage),
            page.waitForTimeout(2000)
        ]);
        return newPage;
    };

    openNewPageInCurrentContext = async (context: BrowserContext): Promise<Page> => {
        const [newPage, _] = await Promise.all([
            context.waitForEvent("page"),
            context.newPage(),
        ]);
        return newPage;
    };

    isLocatorVisible = async (locator: Locator): Promise<void> => await expect(locator).toBeVisible();
    doesLocatorContainText = async (locator: Locator, text: string | RegExp): Promise<void> => await expect(locator).toContainText(text, { timeout: this.locatorTimeout });

    private waitAndReturnLocator = async (
        locator: Locator, 
        options?: FindLocatorOptions
    ): Promise<Locator> => {
        let locatorCount: number = 0;
        try {
            await locator.waitFor({ state: 'attached', timeout: process.env.CI ? this.CILocatorTimeout : this.locatorTimeout });
            if (options?.scrollIntoView) await locator.evaluate(node => node.scrollIntoView());
            if (options?.scrollIntoViewIfNeeded) await locator.scrollIntoViewIfNeeded();
            if (options?.nthChild) locator = locator.nth(options?.nthChild);
            locatorCount = await locator.count();
            if (locatorCount === 1) {
                return locator;
            } else if (locatorCount > 1) {
                throw new Error(`Strict mode violation, resolved to ${locatorCount} locators: ${locator}!`);
            } else if (locatorCount === 0) {
                if (options) {
                    return null;
                } else {
                    throw new Error(`isOptionalLocator: ${options}; there is ${locatorCount} locator found: ${locator}!`);
                };
            };
        } catch {
            locatorCount = await locator.count();
            if (locatorCount === 1) {
                return locator;
            } else if (locatorCount > 1) {
                throw new Error(`Strict mode violation, resolved to ${locatorCount} locators: ${locator}!`);
            } else if (locatorCount === 0) {
                if (options) {
                    return null;
                } else {
                    throw new Error(`isOptionalLocator: ${options}; there is ${locatorCount} locator found: ${locator}!`);
                };
            };
        };
    };

    private waitAndReturnLocators = async (locators: Locator[]): Promise<Locator[]> => {
        await Promise.all(locators.map(locator => locator.waitFor({ state: 'attached', timeout: process.env.CI ? this.CILocatorsTimeout : this.locatorsTimeout })));
        return locators.length > 0 ? locators : [];
    };

    private waitAndReturnFrameLocator = async (
        locator: Locator, 
        options?: FindLocatorOptions
    ): Promise<Locator> => {
        try {
            await locator.waitFor({ state: 'attached', timeout: process.env.CI ? this.CIFrameLocatorTimeout : this.frameLocatorTimeout });
            const locatorCount = await locator.count();
            if (locatorCount === 1) return locator;
        } catch {
            const locatorCount = await locator.count();
            if (locatorCount > 1) {
                throw new Error(`Strict mode violation, resolved to ${locatorCount} locators: ${locator}!`);
            } else if (locatorCount === 0) {
                if (options) {
                    return null;
                } else {
                    throw new Error(`isOptionalLocator: ${options}; there is ${locatorCount} locator found: ${locator}!`);
                };
            };
        };
    };

    private getSelectorByRole = (text: string, role: LocatorRole): string => {
        switch (role) {
            /**
            * HTML template: 
            * <label>text</label>
            */
            case 'label': return `label:text-is("${text}")`;

            /**
            * HTML template: 
            * <label>text</label>
            * <input>
            */
            case 'labelInput': return `label:text-is("${text}") + input`;

            /**
             * HTML template: <legend>text</legend>
             */
            case 'legend': return `legend:text-is("${text}")`;

            /**
            * HTML template: 
            * <div class="title">Draft</div>
            */
            case 'title': return `div.title:text-is("${text}")`;

            /**
             * HTML template: <button>text</button>
             */
            case 'textButton': return `button:text-is("${text}")`;

            default: return null;
        };
    };
}

export enum LocatorRole {
    label = 'label',
    labelInput = 'labelInput',
    legend = 'legend',
    title = 'title',
    textButton = 'textButton',
};