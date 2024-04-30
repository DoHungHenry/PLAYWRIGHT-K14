import { HomePage } from "models/demowebshop.tricentis";
import { FooterGenericComp } from "models/demowebshop.tricentis/common.components/footer.generic/child.comp/footer.generic.comp";
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

    const footerComp: FooterComponent2 = new HomePage(page).footerGenericComp();
    const infoColumnComp2: InfoColumnComp2 = new HomePage(page).footerGenericComp().footerColumnComp2(InfoColumnComp2);

    const title = await infoColumnComp2.titleLct(InfoColumnComp2.selectorValue).textContent();
    console.log(`Title: ${title}`);
    expect(title).toBe('Information');
});