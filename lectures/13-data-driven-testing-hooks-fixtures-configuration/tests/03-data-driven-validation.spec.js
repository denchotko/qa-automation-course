import { test, expect } from "@playwright/test";

const registrationUrl = new URL("../pages/registration.html", import.meta.url)
  .href;

// Test data: various invalid email inputs
const invalidEmails = [
  { email: "", expectedError: "Email is required" },
  { email: "notanemail", expectedError: "Email must contain @" },
  { email: "missing-domain@", expectedError: "Email must contain @" },
  { email: "@missing-user.com", expectedError: "Email must contain @" },
  { email: "user@", expectedError: "Email must contain @" },
];

invalidEmails.forEach((testCase) => {
  test(`show error for email: "${testCase.email}"`, async ({ page }) => {
    await page.goto(registrationUrl);
    await page.locator("#email").fill(testCase.email);
    await page.locator("#password").fill("password123");
    await page.locator("#age").fill("25");
    await page.locator("#submit").click();

    await expect(page.locator("#email-error")).toBeVisible();
    await expect(page.locator("#email-error")).toContainText(
      testCase.expectedError
    );
  });
});

// Test data: various invalid passwords
const invalidPasswords = [
  { password: "", expectedError: "Password is required" },
  { password: "12345", expectedError: "at least 6 characters" },
  { password: "abc", expectedError: "at least 6 characters" },
  { password: "     ", expectedError: "Password is required" },
];

invalidPasswords.forEach((testCase) => {
  test(`show error for password: "${testCase.password}"`, async ({ page }) => {
    await page.goto(registrationUrl);
    await page.locator("#email").fill("user@example.com");
    await page.locator("#password").fill(testCase.password);
    await page.locator("#age").fill("25");
    await page.locator("#submit").click();

    await expect(page.locator("#password-error")).toBeVisible();
    await expect(page.locator("#password-error")).toContainText(
      testCase.expectedError
    );
  });
});

// Test data: various invalid ages
const invalidAges = [
  { age: "", expectedError: "Age is required" },
  { age: "-1", expectedError: "Invalid age" },
  { age: "0", expectedError: "Invalid age" },
  { age: "abc", expectedError: "Invalid age" },
  { age: "150", expectedError: "Invalid age" },
];

invalidAges.forEach((testCase) => {
  test(`show error for age: "${testCase.age}"`, async ({ page }) => {
    await page.goto(registrationUrl);
    await page.locator("#email").fill("user@example.com");
    await page.locator("#password").fill("password123");
    await page.locator("#age").fill(testCase.age);
    await page.locator("#submit").click();

    await expect(page.locator("#age-error")).toBeVisible();
    await expect(page.locator("#age-error")).toContainText(
      testCase.expectedError
    );
  });
});

// Test valid submissions
const validSubmissions = [
  { email: "user@example.com", password: "password123", age: "25" },
  { email: "john.doe@company.net", password: "mypassword", age: "45" },
];

validSubmissions.forEach((testCase) => {
  test(`accept valid registration: ${testCase.email}`, async ({ page }) => {
    await page.goto(registrationUrl);
    await page.locator("#email").fill(testCase.email);
    await page.locator("#password").fill(testCase.password);
    await page.locator("#age").fill(testCase.age);
    await page.locator("#submit").click();

    await expect(page.locator("#success-message")).toBeVisible();
  });
});
