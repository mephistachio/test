import {} from "selenium-webdriver/testing";
import {by, element} from "protractor";

const mainPage = function()
{
    let myContracts = element(by.xpath('/html/body/wf-root/wf-private-layout/div/wf-sidebar/ul/li[2]/a'));
}


//after(async () => driver.quit());