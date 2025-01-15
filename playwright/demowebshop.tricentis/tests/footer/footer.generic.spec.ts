import { HomePage } from "models/demowebshop.tricentis";
import { FooterGenericComponent } from "models/demowebshop.tricentis/common.components/footer.generic/child.comp/footer.generic.comp";
import { InfoColumnComp2 } from "models/demowebshop.tricentis/common.components/footer.generic/child.comp/info.column.comp2";
import { FooterComponent2 } from "models/demowebshop.tricentis/common.components/footer.generic/footer.column.comp2";
import { expect, Page, test } from "@playwright/test";

let page: Page;
let homePage: HomePage;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
});

test('Test footer POM with generic', async () => {
    await page.goto('https://demowebshop.tricentis.com/', { waitUntil: 'networkidle' });

    const footerComponent: FooterComponent2 = new HomePage(page).footerGenericComponent();
    const infoColumnComponent2: InfoColumnComponent2 = new HomePage(page).footerGenericComponent().footerColumnComponent2(InfoColumnComponent2);

    const title = await infoColumnComponent2.titleLct(InfoColumnComponent2.selectorValue).textContent();
    console.log(`Title: ${title}`);
    expect(title).toBe('Information');
});