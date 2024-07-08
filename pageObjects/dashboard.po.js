const { expect } = require("@playwright/test");

exports.DashboardPage = class DashboarPage {
  constructor(page) {
    this.page = page;
    this.practiceMsg = '//*[@id="menu-item-20"]/a';
    this.testExceptionLink =
      '//*[@id="loop-container"]/div/article/div[2]/div[2]/div[1]/p/a';
  }
};
