import { test, expect } from "../fixtures/authenticated.js";

const loginUrl = new URL("../pages/login.html", import.meta.url).href;

test("access protected page (already logged in)", async ({
  authenticatedPage,
}) => {
  // authenticatedPage should be an already logged-in page provided by the fixture
  // Since the fixture already performed login, verify welcome is shown
  await expect(authenticatedPage.locator("#success-message")).toContainText(
    "Welcome"
  );
});

test("test user profile (already logged in)", async ({ authenticatedPage }) => {
  // Example placeholder; in a real app navigate to profile and assert user data
  await authenticatedPage.goto(loginUrl);
  // await expect(authenticatedPage.locator('#user-name')).toContainText('admin');
  await expect(authenticatedPage.locator("body")).toBeVisible();
});
