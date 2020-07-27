
let homepage = require('../pages/AngularJS_Banking_homePage');
let loginpage = require('../pages/AngularJS_Banking_BankManagerLoginPage');
let addcustomerpage = require('../pages/AngularJS_Banking_AddCustomerPage');
let prop = require('../testdata/prop.json');

describe('demo banking application test', function () {
    it('check for work flow', function () {
        // browser.get('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        //homepage.get('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        homepage.get(prop.siteurl);

        // Printed Page Title in Console - XYZ Bank
       expect(browser.getTitle()).toContain("XYZ Bank");
       let pageTitle = browser.getTitle();

       pageTitle.then(function(txt)
       {
           console.log("Page Title :- " + txt);
       })

        // element(by.css('[ng-click="manager()"]')).click();
        homepage.bank_manager_login_button_click();

        //element(by.css('[ng-click="addCust()"]')).click();
        loginpage.addcustomer_button_click();

        //element(by.model('fName')).sendKeys('');
        //taken value from json prop file
        let firstname = prop.customers.firstname;
        addcustomerpage.firstname_input(firstname);

        // element(by.model('lName')).sendKeys('');
        //taken value from json prop file
        let lastname = prop.customers.lastname;
        addcustomerpage.lastname_input(lastname);

        // element(by.model('postCd')).sendKeys('');
        //taken value from json prop file
        let postalcode = prop.customers.postalcode;
        addcustomerpage.postcode_input(postalcode);

        //it click add customer button
        addcustomerpage.addcustomer_button_click();
       
        // alert flow
       let EC = protractor.ExpectedConditions;
       browser.wait(EC.alertIsPresent(), 4000, "Alert not found");
        
       let alert = browser.switchTo().alert();
      // let AlertText = alert.getText();
      //expect(alertText).toContain("Customer Added Successfully");
       alert.accept();

       // it click open account button 
       browser.manage().timeouts().implicitlyWait(5000);
       addcustomerpage.openaccount_element_click();

   

        browser.sleep(4000);
    });
});