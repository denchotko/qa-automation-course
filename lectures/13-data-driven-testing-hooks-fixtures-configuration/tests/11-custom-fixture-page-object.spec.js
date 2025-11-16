import { test, expect } from "../fixtures/pageObjects.js";

test("login using page object fixture", async ({ loginPage }) => {
  // loginPage is already created and (typically) navigated by fixture
  await loginPage.username.fill("admin");
  await loginPage.password.fill("admin123");
  await loginPage.submit.click();
  await expect(loginPage.successMessage).toContainText("Welcome admin");
});

test("login fails with invalid credentials", async ({ loginPage }) => {
  await loginPage.username.fill("wrong");
  await loginPage.password.fill("wrong");
  await loginPage.submit.click();
  await expect(loginPage.errorMessage).toContainText("Invalid");
});
