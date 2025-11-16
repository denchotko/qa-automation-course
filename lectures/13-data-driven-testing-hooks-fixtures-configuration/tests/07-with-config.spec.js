import { test, expect } from "@playwright/test";

// For local HTML files, use full URL
const loginUrl = new URL("../pages/login.html", import.meta.url).href;

test.beforeEach(async ({ page }) => {
  await page.goto(loginUrl);
});

test("login test using configuration", async ({ page }) => {
  await page.locator("#username").fill("admin");
  await page.locator("#password").fill("admin123");
  await page.locator("#login-button").click();
  await expect(page.locator("#success-message")).toBeVisible();
});

// Note: For real web apps with a running server and baseURL in config, you can:
// await page.goto("/login");
