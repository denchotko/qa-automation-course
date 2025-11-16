import { test as base } from "@playwright/test";

const loginUrl = new URL("../pages/login.html", import.meta.url).href;

export const test = base.extend({
  // Provides a page that is already logged in (uses client-side login on the example page)
  authenticatedPage: async ({ page }, use) => {
    // Navigate to login page and perform a login using known demo credentials
    await page.goto(loginUrl);
    // These demo credentials are used in the lecture example pages
    await page.fill("#username", "admin");
    await page.fill("#password", "admin123");
    await page.click("#login-button");
    // wait for success indicator
    await page.waitForSelector("#success-message");
    await use(page);
  },
});

export { expect } from "@playwright/test";
