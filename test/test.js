import {describe, it} from "selenium-webdriver/testing";
import {browser, by, element, error, protractor, WebElement} from "protractor";
import {WebDriver as driver} from "selenium-webdriver";
import * as until from "selenium-webdriver";
import * as fs from 'fs';
import outputFile from "./test/Output.json";

const loginPage = require('./pages/login_page');
describe('Navigating to login page', function (text, reviver) {
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
    it('Check image', function () {
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

    it('Navigate to My Contracts', function () {
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
    it('Navigate to Profile', async function () {
       browser.driver.findElement(by.xpath('/html/body/wf-root/wf-private-layout/div/wf-sidebar/ul/li[5]/a')).click();
       let perData = await driver.wait(until.elementLocated(browser.driver.findElement(by.xpath('/html/body/wf-root/wf-private-layout/div/wf-sidebar/ul/li[5]/a'))).click());
       let firstName = browser.driver.findElement(by.xpath('/html/body/wf-root/wf-private-layout/div/div/wf-account-personal-details-page/wf-account-details-form/div/form/wf-general-personal-infomation/form/div[1]/div[2]/div/div/label')).getText();
        console.assert(firstName, "First Name");
    });
    const personalData = driver.get("https://my.wefox.de/account/personal-details");
    const outputFilename = "./test/Output.json";
    fs.writeFile(outputFilename, personalData, function(err) {
        if(err) {
            console.log(err);
        }
        else {
            console.log("JSON saved to " + outputFilename); //save personal data to json
        }
    }
    );
    it('Logout from profile', function () {
        const logOut = browser.driver.findElement(by.linkText("Log out")).click();
        if (!logOut.isDisplayed()) {
            return;
        } else {
            logOut.click();
        }

    })
})









