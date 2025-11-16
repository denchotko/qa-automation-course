import { test, expect } from "@playwright/test";

const loginUrl = new URL("../pages/login.html", import.meta.url).href;

// This runs once before all tests
test.beforeAll(async () => {
  console.log("⚙️  beforeAll: Setting up test suite");
  console.log("This runs ONCE before all tests");
});

// This runs before each test
test.beforeEach(async ({ page }) => {
  console.log("\n🔧 beforeEach: Setting up individual test");
  await page.goto(loginUrl);
  console.log("Navigated to login page");
});

// This runs after each test
test.afterEach(async () => {
  console.log("🧹 afterEach: Cleaning up after test");
  console.log("This could delete test data, clear cookies, etc.");
});

// This runs once after all tests
test.afterAll(async () => {
  console.log("\n✅ afterAll: Tearing down test suite");
  console.log("This runs ONCE after all tests");
});

test("test 1: login with admin", async ({ page }) => {
  console.log("   📝 Running test 1");
  await page.locator("#username").fill("admin");
  await page.locator("#password").fill("admin123");
  await page.locator("#login-button").click();
  await expect(page.locator("#success-message")).toBeVisible();
});

test("test 2: login with user", async ({ page }) => {
  console.log("   📝 Running test 2");
  await page.locator("#username").fill("user");
  await page.locator("#password").fill("user123");
  await page.locator("#login-button").click();
  await expect(page.locator("#success-message")).toBeVisible();
});

test("test 3: login fails with invalid credentials", async ({ page }) => {
  console.log("   📝 Running test 3");
  await page.locator("#username").fill("wrong");
  await page.locator("#password").fill("wrong");
  await page.locator("#login-button").click();
  await expect(page.locator("#error-message")).toBeVisible();
});
