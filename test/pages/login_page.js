import {after, describe, it} from "selenium-webdriver/testing";
import {browser, by, element, protractor, WebDriver} from 'protractor';

const webdriver = require('selenium-webdriver');
const pref = new webdriver.logging.Preferences();
const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setLoggingPrefs(pref)
    .build();

const LoginPage = function () {
    let emailInput = element(by.id('user_name'));
    let passwordInput = element(by.id('password'));
    let signInButton = element(by.id('signIn'));

    this.LoginValid = function (email, password) {
        let EC = protractor.ExpectedConditions;
        emailInput.clear().sendKeys(email);
        browser.wait(EC.visibilityOf(passwordInput));
        passwordInput.clear().sendKeys(password);
        signInButton.click();
        driver.wait(function() {
            return driver.executeScript('return document.readyState').then(function (readyState) {
                return readyState === 'complete';
            });
        });
    }
}

module.exports = new LoginPage();


