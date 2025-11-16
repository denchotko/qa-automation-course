import { test, expect } from "@playwright/test";

const loginUrl = new URL("../pages/login.html", import.meta.url).href;

test("login works across all browsers", async ({ page, browserName }) => {
  console.log(`Running test on: ${browserName}`);
  await page.goto(loginUrl);
  await page.locator("#username").fill("admin");
  await page.locator("#password").fill("admin123");
  await page.locator("#login-button").click();
  await expect(page.locator("#success-message")).toBeVisible();
  console.log(`✅ Test passed on ${browserName}`);
});
