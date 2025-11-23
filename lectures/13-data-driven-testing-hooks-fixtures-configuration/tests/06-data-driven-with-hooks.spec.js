import { test, expect } from "@playwright/test";

const loginUrl = new URL("../pages/login.html", import.meta.url).href;

// Setup runs before each test
test.beforeEach(async ({ page }) => {
  await page.goto(loginUrl);
});

// Data-driven tests with automatic setup!
const users = [
  { username: "admin", password: "admin123" },
  { username: "user", password: "user123" },
  { username: "manager", password: "manager123" },
];

users.forEach((user) => {
  test(`login as ${user.username}`, async ({ page }) => {
    await page.locator("#username").fill(user.username);
    await page.locator("#password").fill(user.password);
    await page.locator("#login-button").click();
    await expect(page.locator("#success-message")).toBeVisible();
  });
});

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
    await page.locator("#username").fill(userData.username || "");
    await page.locator("#password").fill(userData.password || "");
    await page.locator("#login-button").click();

    await expect(page.locator("#error-message")).toBeVisible();
  });
});
