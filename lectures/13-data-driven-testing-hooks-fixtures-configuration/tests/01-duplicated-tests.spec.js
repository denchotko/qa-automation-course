import { test, expect } from "@playwright/test";

const loginUrl = new URL("../pages/login.html", import.meta.url).href;

test("login with admin user", async ({ page }) => {
  await page.goto(loginUrl);
  await page.locator("#username").fill("admin");
  await page.locator("#password").fill("admin123");
  await page.locator("#login-button").click();

  await expect(page.locator("#success-message")).toBeVisible();
  await expect(page.locator("#success-message")).toContainText("Welcome admin");
});

test("login with regular user", async ({ page }) => {
  await page.goto(loginUrl);
  await page.locator("#username").fill("user");
  await page.locator("#password").fill("user123");
  await page.locator("#login-button").click();

  await expect(page.locator("#success-message")).toBeVisible();
  await expect(page.locator("#success-message")).toContainText("Welcome user");
});

test("login with manager user", async ({ page }) => {
  await page.goto(loginUrl);
  await page.locator("#username").fill("manager");
  await page.locator("#password").fill("manager123");
  await page.locator("#login-button").click();

  await expect(page.locator("#success-message")).toBeVisible();
  await expect(page.locator("#success-message")).toContainText(
    "Welcome manager"
  );
});

test("login with guest user", async ({ page }) => {
  await page.goto(loginUrl);
  await page.locator("#username").fill("guest");
  await page.locator("#password").fill("guest123");
  await page.locator("#login-button").click();

  await expect(page.locator("#success-message")).toBeVisible();
  await expect(page.locator("#success-message")).toContainText("Welcome guest");
});

test("login with developer user", async ({ page }) => {
  await page.goto(loginUrl);
  await page.locator("#username").fill("developer");
  await page.locator("#password").fill("dev123");
  await page.locator("#login-button").click();

  await expect(page.locator("#success-message")).toBeVisible();
  await expect(page.locator("#success-message")).toContainText(
    "Welcome developer"
  );
});

test("login with invalid credentials", async ({ page }) => {
  await page.goto(loginUrl);
  await page.locator("#username").fill("wronguser");
  await page.locator("#password").fill("wrongpass");
  await page.locator("#login-button").click();

  await expect(page.locator("#error-message")).toBeVisible();
  await expect(page.locator("#error-message")).toContainText("Invalid");
});

test("login with empty username", async ({ page }) => {
  await page.goto(loginUrl);
  await page.locator("#password").fill("password123");
  await page.locator("#login-button").click();

  await expect(page.locator("#error-message")).toBeVisible();
  await expect(page.locator("#error-message")).toContainText(
    "Please enter both"
  );
});

test("login with empty password", async ({ page }) => {
  await page.goto(loginUrl);
  await page.locator("#username").fill("admin");
  await page.locator("#login-button").click();

  await expect(page.locator("#error-message")).toBeVisible();
  await expect(page.locator("#error-message")).toContainText(
    "Please enter both"
  );
});
