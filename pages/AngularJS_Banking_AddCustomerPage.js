let AddCustomer_Page = function () {
    let first_name_element = element(by.model('fName'));
    let last_name_element = element(by.model('lName'));
    let post_code_element = element(by.model('postCd'));


    this.firstname_input = function (firstname) {
        first_name_element.sendKeys(firstname);
    }


    this.lastname_input = function (lastname) {
        last_name_element.sendKeys(lastname);
    }

    this.postcode_input = function (postcode) {
        post_code_element.sendKeys(postcode);
    }
};

module.exports = new AddCustomer_Page();