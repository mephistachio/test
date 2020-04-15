import {describe, it} from "selenium-webdriver/testing";
import {browser, by, element, error, protractor, WebElement} from "protractor";
import {WebDriver as driver} from "selenium-webdriver";
import * as until from "selenium-webdriver";


const loginPage = require('./pages/login_page');
describe('Navigating to login page', function() {
    it('should navigate to login page', function () {
        let EC = protractor.ExpectedConditions;
        browser.driver.manage().window().maximize();
        browser.get('https://my.wefox.de/login');
        EC.titleContains('Anmeldung - wefox').then(function success() {
                return true;
            }, function fail() {
                return console.log("Error loaded page is not the expected one.")
            }
        );

    });
    it('Login Action', function () {
        browser.driver.findElement(by.id('user_name')).sendKeys('aqawefox+testtecnico@wefoxgroup.com');
        browser.driver.findElement(by.id('password')).sendKeys('qwertyasdf');
        browser.driver.findElement(by.css('button.wf-c-btn:nth-child(4)')).click();
        return browser.driver.wait(function () {
            return (loginPage |> browser.driver.getCurrentUrl).then(() => {
            });
        }, 10000);
    });

    const mainPage = require('./pages/MainPage');
    describe('Check image', function () {
        let EC = protractor.ExpectedConditions;
        EC.titleContains('Dashboard').then(function success() {
            return true;
        }, function fail() {
            return fail()
        });
        let imgLoaded = browser.driver.findElement(by.css('.wf-c-agent-card__image'));
        imgLoaded.isDisplayed().then(res => {
            if (res) {
                return true;
            } else {
                return false;
            }
        });
    });

    describe('Navigate to My Contracts', function () {
        browser.driver.findElement(by.xpath('/html/body/wf-root/wf-private-layout/div/wf-sidebar/ul/li[2]/a')).click();
let isEmptyContracts = browser.driver.findElement(by.xpath('/html/body/wf-root/wf-private-layout/div/div/wf-contracts-list/wf-empty-state/div/div[2]/p[1]'))
isEmptyContracts.isDisplayed().then(contr => {
    if (!contr) {

    } else {
        return console.log("There are no contracts");
    }

    });
    }
);
    describe('Navigate to Profile', async function () {
        browser.driver.findElement(by.xpath('/html/body/wf-root/wf-private-layout/div/wf-sidebar/ul/li[5]/a')).click();
       let perData = await driver.wait(until.elementLocated(browser.driver.findElement(by.xpath('/html/body/wf-root/wf-private-layout/div/wf-sidebar/ul/li[5]/a'))).click());

    });})









