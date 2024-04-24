import { ProductItemComp } from '@modules/demowebshop.tricentis/common.components/product.item.card/product.item.comp';
import { SearchComp } from '@modules/demowebshop.tricentis/common.components/header/search/search.comp';
import { HomePage } from '@modules/demowebshop.tricentis/home.page/home.page';
import { test } from '@playwright/test';

test('Test Products list as searching result in Page', async ({ page }) => {

    await page.goto('https://demowebshop.tricentis.com/');
    const homePage: HomePage = new HomePage(page);
    const searchComponent: SearchComp = homePage.headerComp().searchComponent();
    await searchComponent.searchBoxLct().click();
    await searchComponent.searchProduct('own');

    const productItemCompList: ProductItemComp[] = await homePage.productItemComponentList();

    for (let productItemComponent of productItemCompList) {
        const productTitle = await (productItemComponent.productTitle()).textContent();
        const productPrice = await (productItemComponent.productPrice()).textContent();
        console.log(`${productTitle.trim()}: ${productPrice.trim()}`);
    };

    // DEBUG purpose only
    await page.waitForTimeout(2000);
})