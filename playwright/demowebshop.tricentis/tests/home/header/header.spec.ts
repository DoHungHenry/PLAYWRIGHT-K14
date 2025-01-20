// import { HomePage } from '@demowebshop.tricentis/models/home.page';
// import { expect, Page, test } from '@playwright/test';

// let page: Page;

// test.beforeAll(async ({ browser }) => {
//     page = await browser.newPage();
// });

// test('Search product item', async () => {

//     await page.goto('https://demowebshop.tricentis.com/');
//     const homePage: HomePage = new HomePage(page);
//     const searchComponent: SearchComponent = homePage.headerComponent().searchComponent();

//     await searchComponent.searchBoxLct().click();
//     await page.waitForTimeout(2000);

//     await searchComponent.searchBoxLct().fill('laptop');
//     await page.waitForTimeout(2000);

//     await searchComponent.searchBtnLct().click();

//     await page.waitForTimeout(2000);
// });

// test('Verify hyperlink in header-links comp', async () => {
//     const headerLinks = ["/register", "/login", "/cart", "/wishlist"];

//     await page.goto('https://demowebshop.tricentis.com/');
//     const linkComponent = new HomePage(page).headerComponent().linkComponent();

//     let retrievedLinks: string[] = [];

//     const linkLcts = await linkComponent.linkLcts();

//     for (const linkLct of linkLcts) {
//         const link = await linkLct.getAttribute('href');
//         console.log(`Link: ${link}`);
//         retrievedLinks.push(link);
//     };

//     expect(retrievedLinks).toEqual(headerLinks);

//     await page.waitForTimeout(2000);
// });
