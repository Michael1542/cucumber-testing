import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Page, Browser, expect} from '@playwright/test';

/*
let browser: Browser;
let page: Page;

Given('Provide valid urls', async function () {
    console.log("Given");
    browser = await chromium.launch({headless: false});
    page = await browser.newPage();


    // the url
    //await page.goto('https://demo.guru99.com/test/newtours/');
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

When('enter username as {string}', async function (string) {
    await page.locator('[name="userName"]').fill(string)
});

When('enter password as {string}', async function (string) {
    await page.locator('[name="password"]').fill(string)
});

Then('click on submit button', async function () {
    await page.locator('[name="submit"]').click();
    await page.waitForTimeout(2000);
});

Then('verify login success message as {string}', async function (string) {
    const msg = await page.locator("//h3[normalize-space()='Login Successfully']").textContent()
    await expect(msg).toEqual(string);
    await page.close();
    await browser.close();
});
*/