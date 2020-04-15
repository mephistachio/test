import {describe, it} from "selenium-webdriver/testing";
import {browser, by, protractor} from "protractor";

const loginPage = require('./pages/login_page');
describe('Navigating to login page', function() {
    it('should navigate to login page', function () {
        let EC = protractor.ExpectedConditions;
        browser.driver.manage().window().maximize();
        browser.get('https://my.wefox.de/login');
        EC.titleContains('Anmeldung - wefox').then(function success()
            {
                return true;
            }, function fail()
        {
            return console.log("Error loaded page is not the expected one.")
        }
        );

    });
    it('Login Action', function () {
        browser.driver.findElement(by.id('user_name')).sendKeys('aqawefox+testtecnico@wefoxgroup.com');
        browser.driver.findElement(by.id('password')).sendKeys('qwertyasdf');
        browser.driver.findElement(by.css('button.wf-c-btn:nth-child(4)')).click();
        return browser.driver.wait(function() {
            return (loginPage |> browser.driver.getCurrentUrl).then(() => {
            });
        }, 10000);
    });

    const mainPage = require('./pages/MainPage');

});




