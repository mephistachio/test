import {describe, it} from "selenium-webdriver/testing";
import {browser, by, error, protractor} from "protractor";
import {falseIfMissing, passBoolean} from "protractor/built/util";
import {WebDriver as driver} from "selenium-webdriver";

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
    describe('Navigate to My Contracts', function () {
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






