import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Page, Browser, BrowserContext} from '@playwright/test';
import { pageFixture } from '../utilities/pageFixture';

let browser: Browser;
//let page: Page;



Given('Provide valid url', async function () {
    console.log("Given");
    browser = await chromium.launch({headless: false});


    // the url
    await  pageFixture.page.goto('https://demo.guru99.com/test/newtours/');
});

When('Provide valid username and password', async function () {
    await pageFixture.page.locator('[name="userName"]').fill('mercury')
    await pageFixture.page.locator('[name="password"]').fill('mercury')
    console.log("When");

});

Then('Click on login button', async function () {
    await pageFixture.page .locator('[name="submit"]').click();
    await pageFixture.page .waitForTimeout(2000);
    await pageFixture.page .close()
    await browser.close()
});

When('Provide valid username as {string} and password as {string}', async function (name, password) {
    await pageFixture.page .locator('[name="userName"]').fill(name)
    await pageFixture.page .locator('[name="password"]').fill(password)

});