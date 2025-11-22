import { expect } from "@playwright/test";
import { test } from "../support/fixtures/testData.js";

const registrationUrl = new URL(
  "../../pages/registration.html",
  import.meta.url
).href;

test("registers a new user successfully", async ({ page, testUser }) => {
  await page.goto(registrationUrl);

  await page.fill("#email", testUser.email);
  await page.fill("#password", testUser.password);
  await page.fill("#age", testUser.age.toString());
  await page.click("#submit");

  const successMessage = page.locator("#success-message");
  await expect(successMessage).toBeVisible();
  await expect(successMessage).toContainText("Registration successful");
});

test("validate testUser data without browser", async ({ testUser }) => {
  expect(testUser.email).toContain("@");
  expect(typeof testUser.age).toBe("number");
  expect(testUser.age).toBeGreaterThanOrEqual(18);
});
