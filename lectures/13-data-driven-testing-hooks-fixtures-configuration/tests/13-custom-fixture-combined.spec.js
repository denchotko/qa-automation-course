import { test, expect } from "../fixtures/combined.js";

test("use multiple fixtures together", async ({
  testUser,
  loginPage,
  authenticatedPage,
}) => {
  // Validate testUser fixture
  expect(testUser.email).toMatch(/@/);

  // Use loginPage fixture
  await loginPage.username.fill(testUser.username);
  await loginPage.password.fill(testUser.password ?? "password123");
  await loginPage.submit.click();
  await expect(loginPage.successMessage).toBeVisible();

  // Use authenticatedPage fixture
  await expect(authenticatedPage).toBeDefined();
});

test("use only what you need", async ({ testUser, loginPage }) => {
  await loginPage.username.fill(testUser.username);
  await loginPage.password.fill(testUser.password ?? "password123");
  await loginPage.submit.click();
  await expect(loginPage.successMessage).toBeVisible();
});
