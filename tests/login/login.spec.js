const { test, expect } = require("@playwright/test");
const testData = require("../../fixtures/loginFixture.json");
import { LoginPage } from "../../pageObjects/login.po.js";

test.beforeEach(async ({ page }) => {
  await page.goto("./");
});

test.describe("Valid Login tests", () => {
  test("valid login", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.validUser.Username, testData.validUser.Password);
    await login.verifyValidLogin();
  });
});

test.describe("Invalid Login Test", () => {
  test("invalid username invalid password", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(
      testData.invalidUser.InvalidUsername,
      testData.invalidUser.InvalidPassword
    );
    await login.verifyInvalidUsername();
  });

  test("invalid username valid password", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(
      testData.invalidUser.InvalidUsername,
      testData.invalidUser.Password
    );
    await login.verifyInvalidUsername();
  });

  test("valid username invalid password", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(
      testData.invalidUser.Username,
      testData.invalidUser.InvalidPassword
    );
    await login.verifyInvalidPassword();
  });

  test("no username no password", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(
      testData.invalidUser.EmptyUsername,
      testData.invalidUser.EmptyPassword
    );
    await login.verifyInvalidUsername();
  });

  test("no username valid password", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(
      testData.invalidUser.EmptyUsername,
      testData.invalidUser.Password
    );
    await login.verifyInvalidUsername();
  });

  test("valid username no password", async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(
      testData.invalidUser.Username,
      testData.invalidUser.EmptyPassword
    );
    await login.verifyInvalidPassword();
  });
});

test.afterEach(async ({ page }) => {
  await page.close();
});
