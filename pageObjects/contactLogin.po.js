const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '//*[@id="email"]';
    this.passwordInput = '//*[@id="password"]';
    this.loginButton = '//*[@id="submit"]';
    this.validLoginValidation = "//html/body/div/header/h1";
    this.errorMessage = '//*[@id="error"]';
    // this.successMessage = "";
    this.addContact = '//*[@id="add-contact"]';

    this.firstname = "#firstName";
    this.lastname = "#lastName";
    this.dob = "#birthdate";
    this.email = "#email";
    this.phone = "#phone";
    this.street1 = "#street1";
    this.street2 = "#street2";
    this.city = "#city";
    this.state = "#stateProvince";
    this.postal = "#postalCode";
    this.country = "#country";

    this.submit = '//*[@id="submit"]';
    this.cancel = '//*[@id="cancel"]';

    this.editBtn = '//*[@id="myTable"]/tr[1]';
    this.editContactBtn = '//*[@id="edit-contact"]';
    this.editSubmit = '//*[@id="submit"]';

    this.deleteContactBtn = '//*[@id="delete"]';
  }

  async login(username, password) {
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
  }
  async verifyValidLogin() {
    await expect(this.page.locator(this.validLoginValidation)).toHaveText(
      "Contact List"
    );
  }

  // async invalidLogin(error) {
  //   await expect(this.page.locator(this.errorMessage)).toHaveText(error);
  // }

  async addNewContact(
    firstname,
    lastname,
    dob,
    email,
    phone,
    street1,
    street2,
    city,
    state,
    postal,
    country
  ) {
    await this.page.locator(this.addContact).click();
    await this.page.locator(this.firstname).fill(firstname);
    await this.page.locator(this.lastname).fill(lastname);
    await this.page.locator(this.dob).fill(dob);
    await this.page.locator(this.email).fill(email);
    await this.page.locator(this.phone).fill(phone);
    await this.page.locator(this.street1).fill(street1);
    await this.page.locator(this.street2).fill(street2);
    await this.page.locator(this.city).fill(city);
    await this.page.locator(this.state).fill(state);
    await this.page.locator(this.postal).fill(postal);
    await this.page.locator(this.country).fill(country);

    await this.page.locator(this.submit).click();
    await expect(this.page.locator(this.validLoginValidation)).toHaveText(
      "Contact List"
    );
  }

  async editContacts(firstname, lastname) {
    await this.page.locator(this.editBtn).click();
    await this.page.locator(this.editContactBtn).click();
    await this.page.locator(this.firstname).fill(firstname);
    await this.page.locator(this.lastname).fill(lastname);
    await this.page.locator(this.editSubmit).click();
    // await expect(this.page.locator(this.validLoginValidation)).toHaveText(
    //   "Contact Details"
    // );
  }

  async deleteContact() {
    await this.page.locator(this.editBtn).click();
    await this.page.locator(this.deleteContactBtn).click();
    // await this.page.on("dialog", (dialog) => dialog.accept());
  }
};
