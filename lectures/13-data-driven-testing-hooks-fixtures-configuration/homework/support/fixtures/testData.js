import { test as base } from "@playwright/test";

export const test = base.extend({
  testUser: async ({}, use) => {
    console.log("Setting up testUser fixture");

    const user = {
      username: "testUser",
      password: "securePass123",
      email: "testuser@example.com",
      age: 25,
    };
    await use(user);
    console.log("🧹 Tearing down testUser fixture");
  },
});

export { expect } from "@playwright/test";
