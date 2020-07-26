//page class for home page 
// page function for 1 buttoon in home page 
//page function for Bank Manager Login Button
let homepage = function () {
    let bank_manager_login_button = element(by.css('[ng-click="manager()"]'));

    this.get = function (url) {
        browser.get(url);
    }

    this.bank_manager_login_button_click = function () {
        bank_manager_login_button.click();
    }
};

module.exports = new homepage();