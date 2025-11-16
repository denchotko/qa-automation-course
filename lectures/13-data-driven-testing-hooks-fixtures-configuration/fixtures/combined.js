import { test as base } from "@playwright/test";
import { LoginPage } from "../page-objects/LoginPage.js";

export const test = base.extend({
  // Test user data fixture
  // eslint-disable-next-line no-empty-pattern
  testUser: async ({}, use) => {
    const user = {
      username: "admin",
      password: "admin123",
      name: "Admin User",
      email: "admin@example.com",
    };
    await use(user);
  },

  // Page object fixture
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },

  // Authenticated page that depends on loginPage and testUser
  authenticatedPage: async ({ loginPage, testUser }, use) => {
    // Attempt to login with provided testUser
    await loginPage.login(testUser.username, testUser.password);
    await loginPage.page.waitForSelector("#success-message");
    await use(loginPage.page);
  },
});

export { expect } from "@playwright/test";
