import { SearchComponent } from '@modules/demowebshop.tricentis/common.components/search.comp';
import { HomePage } from '@modules/demowebshop.tricentis/home.page/home.page';
import { test } from '@playwright/test';

test('Test Search Component in Page without action', async ({ page }) => {

    await page.goto('https://demowebshop.tricentis.com/');
    const homePage: HomePage = new HomePage(page);
    const searchComponent: SearchComponent = homePage.searchComponent();

    await searchComponent.searchBoxLct().click();
    await page.waitForTimeout(2000);

    await searchComponent.searchBoxLct().fill('laptop');
    await page.waitForTimeout(2000);

    await searchComponent.searchBtnLct().click();

    // DEBUG purpose only
    await page.waitForTimeout(2000);
})

test('Test Search Component in Page', async ({ page }) => {

    await page.goto('https://demowebshop.tricentis.com/');
    const homePage: HomePage = new HomePage(page);
    const searchComponent: SearchComponent = homePage.searchComponent();

    await searchComponent.searchBoxLct().click();
    await searchComponent.searchProduct('laptop');

    // DEBUG purpose only
    await page.waitForTimeout(2000);
})