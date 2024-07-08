const { test, expect } = require("@playwright/test");
const testData = require("../../fixtures/loginFixture.json");
import { LoginPage } from "../../pageObjects/login.po.js";
import { DashboardPage } from "../../pageObjects/dashboard.po.js";

test.beforeEach(async ({ page }) => {
  await page.goto("./");
});

test.describe("Dashboard CRUD", () => {});
