import { test as base } from "@playwright/test";
import { LoginPage } from "../page-objects/LoginPage.js";

export const test = base.extend({
  // Provides a ready-to-use LoginPage page object
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },
});

export { expect } from "@playwright/test";
