import { test, expect } from "../fixtures/testData.js";

const registrationUrl = new URL("../pages/registration.html", import.meta.url)
  .href;

test("register with fixture data", async ({ page, testUser }) => {
  await page.goto(registrationUrl);
  await page.locator("#email").fill(testUser.email);
  await page.locator("#password").fill(testUser.password);
  await page.locator("#age").fill(String(testUser.age));
  await page.locator("#submit").click();

  await expect(page.locator("#success-message")).toBeVisible();
});

test("verify fixture provides consistent data", async ({ testUser }) => {
  expect(testUser).toBeDefined();
  expect(testUser.email).toMatch(/@/);
  expect(typeof testUser.password).toBe("string");
  expect(testUser.age).toBeGreaterThanOrEqual(18);
});
