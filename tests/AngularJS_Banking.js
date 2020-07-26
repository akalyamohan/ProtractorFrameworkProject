
let homepage = require('../pages/AngularJS_Banking_homePage');
let loginpage = require('../pages/AngularJS_Banking_BankManagerLoginPage');
let addcustomerpage = require('../pages/AngularJS_Banking_AddCustomerPage');

describe('demo calculator test', function () {
    it('addition test', function () {
        // browser.get('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        homepage.get('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');



        // element(by.css('[ng-click="manager()"]')).click();
        homepage.bank_manager_login_button_click();

        //element(by.css('[ng-click="addCust()"]')).click();
        loginpage.addcustomer_button_click();

        //element(by.model('fName')).sendKeys('Akalya');
        addcustomerpage.firstname_input('Akalya');

        // element(by.model('lName')).sendKeys('Mohan');
        addcustomerpage.lastname_input('Mohan');

        // element(by.model('postCd')).sendKeys('638701');
        addcustomerpage.postcode_input('638701');


        browser.sleep(3000);
    });
});