let BankManager_LoginPage = function () {
    let addcustomer_button = element(by.css('[ng-click="addCust()"]'));

    this.addcustomer_button_click = function () {
        addcustomer_button.click();
    }
};

module.exports = new BankManager_LoginPage();