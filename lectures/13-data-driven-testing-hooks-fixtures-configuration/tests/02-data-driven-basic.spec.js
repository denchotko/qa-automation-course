import { test, expect } from "@playwright/test";

const loginUrl = new URL("../pages/login.html", import.meta.url).href;

// Step 1: Define test data in an array
const validUsers = [
  { username: "admin", password: "admin123" },
  { username: "user", password: "user123" },
  { username: "manager", password: "manager123" },
  { username: "guest", password: "guest123" },
  { username: "developer", password: "dev123" },
];

// Step 2: Use forEach to create one test per data item
validUsers.forEach((userData) => {
  test(`login with valid user: ${userData.username} `, async ({ page }) => {
    await page.goto(loginUrl);
    await page.locator("#username").fill(userData.username);
    await page.locator("#password").fill(userData.password);
    await page.locator("#login-button").click();

    await expect(page.locator("#success-message")).toBeVisible();
    await expect(page.locator("#success-message")).toContainText(
      `Welcome ${userData.username}`
    );
  });
});

// Test invalid credentials
const invalidUsers = [
  {
    username: "wronguser",
    password: "wrongpass",
    description: "wrong credentials",
  },
  { username: "", password: "password123", description: "empty username" },
  { username: "admin", password: "", description: "empty password" },
];

invalidUsers.forEach((userData) => {
  test(`login fails with ${userData.description}`, async ({ page }) => {
    await page.goto(loginUrl);
    await page.locator("#username").fill(userData.username || "");
    await page.locator("#password").fill(userData.password || "");
    await page.locator("#login-button").click();

    await expect(page.locator("#error-message")).toBeVisible();
  });
});
