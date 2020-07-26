//page class for add customer page
//page functions for Firstname, lastname and post code text boxes 
let AddCustomer_Page = function () {
    let first_name_element = element(by.model('fName'));
    let last_name_element = element(by.model('lName'));
    let post_code_element = element(by.model('postCd'));
    let addCustomer_element = element(by.className('btn btn-default'));

    //firstname element locator
    this.firstname_input = function (firstname) {
        first_name_element.sendKeys(firstname);
    }

    //last name element locator
    this.lastname_input = function (lastname) {
        last_name_element.sendKeys(lastname);
    }

    //post code element locator
    this.postcode_input = function (postcode) {
        post_code_element.sendKeys(postcode);
    }

    this.addcustomer_button_click = function() {
        addCustomer_element.click();
    }
};

module.exports = new AddCustomer_Page();