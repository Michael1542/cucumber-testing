import { Given, When, Then, Before, BeforeAll, BeforeStep, After, AfterAll, AfterStep } from '@cucumber/cucumber';
import { chromium, Page, Browser, BrowserContext} from '@playwright/test';
import { pageFixture } from './pageFixture';


let browser: Browser;
let page: Page;
let context:BrowserContext;

BeforeAll(async function(){
    browser = await chromium.launch({headless: false});
    context = await browser.newContext();
    page = await context.newPage();
    pageFixture.page = page;
})

AfterAll(async function(){
    await pageFixture.page.close();
    await context.close();
    await browser.close();
})



/*
Before(async function() {
    console.log("Before");

})

BeforeAll(async function() {
    console.log("BeforeAll");

})

BeforeStep(async function() {
    console.log("BeforeStep");

})

After(async function() {
    console.log("After");

})

AfterAll(async function() {
    console.log("AfterAll");
    
})

AfterStep(async function() {
    console.log("AfterStep");
    
})

Given('testing hooks', async function () {
    console.log("Given");

    });

    When('when testing hooks', async function () {

        console.log("When");

    });

    Then('again checking then', async function () {

        console.log("Then");

    });*/