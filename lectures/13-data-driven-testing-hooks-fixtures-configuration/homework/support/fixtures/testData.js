import { test as base, expect } from "@playwright/test";

export const test = base.extend({
  testUser: async ({ page }, use) => {
    console.log("Setting up testUser fixture");

    const registrationUrl = new URL(
      "../../pages/registration.html",
      import.meta.url
    ).href;
    await page.goto(registrationUrl);
    const user = {
      username: "john_doe",
      password: "securePass123",
      email: "john@example.com",
      age: 25,
    };
    await use(user);
    console.log("🧹 Tearing down testUser fixture");
  },
});

export { expect };
