import { Page, test } from '@playwright/test';

const url = 'https://www.foodandwine.com/';

test('Handle JS and return', async ({ page }) => {
    await page.goto(url);

    await page.evaluate(() => {
        const slot = googletag.pubads().getslots().find(({getSlotElementId}) => getSlotElementId() === 'leaderboard-flex-1');
        return slot.getTargetingMap();
    });
    
    // wait
    await page.waitForTimeout(3000);
});