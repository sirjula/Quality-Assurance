const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = "Username";
    this.passwordInput = "Password";
    this.loginButton = '//*[@id="submit"]';
    this.validLoginValidation =
      '//*[@id="loop-container"]/div/article/div[1]/h1';

    this.invalidLoginValidation = '//*[@id="error"]';
  }

  async login(username, password) {
    await this.page.getByLabel(this.usernameInput).fill(username);
    await this.page.getByLabel(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
  }

  async verifyValidLogin() {
    await expect(this.page.locator(this.validLoginValidation)).toHaveText(
      "Logged In Successfully"
    );
  }

  async verifyInvalidUsername() {
    await expect(this.page.locator(this.invalidLoginValidation)).toHaveText(
      "Your username is invalid!"
    );
  }

  async verifyInvalidPassword() {
    await expect(this.page.locator(this.invalidLoginValidation)).toHaveText(
      "Your password is invalid!"
    );
  }
};
