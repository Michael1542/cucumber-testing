import { Given, When, Then, After, Status } from '@cucumber/cucumber';
import { chromium, Page, Browser, BrowserContext} from '@playwright/test';
//import { pageFixture } from '../utilities/pageFixture';

let browser: Browser;
let page: Page;



Given('Provide valid url', async function () {
    console.log("Given");
    browser = await chromium.launch({headless: false});
    page = await browser.newPage();

    // the url
    await page.goto('https://demo.guru99.com/test/newtours/');
});

When('Provide valid username and password', async function () {
    await page.locator('[name="userName"]').fill('mercury')
    await page.locator('[name="password"]').fill('mercury')
    console.log("When");

});

Then('Click on login button', async function () {
    await page .locator('[name="submit"]').click();
    await page .waitForTimeout(2000);

});

When('Provide valid username as {string} and password as {string}', async function (name, password) {
    await page .locator('[name="userName"]').fill(name)
    await page .locator('[name="password"]').fill(password)

});


//should be in hooks


After(async function({pickle, result}){
    console.log("After");


    if (result?.status === Status.FAILED) { //only attach screenshot if the test failed
        const images = await page.screenshot(
            {path: `./test-result/screenshot/${pickle}.png`,
            type: 'png'}
        );
        await this.attach(images, "image/png")
    }
    await page .close()
    await browser.close()

})