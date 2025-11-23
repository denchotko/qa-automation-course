import { test as base, expect } from "@playwright/test";

export const test = base.extend({
  // eslint-disable-next-line no-empty-pattern
  testUser: async ({}, use) => {
    console.log("Setting up testUser fixture");

    const testUser = {
      username: "testUser",
      password: "user123",
      email: "user@example.com",
      age: 25,
    };
    await use(testUser);
    console.log("🧹 Tearing down testUser fixture");
  },
});

export { expect };
