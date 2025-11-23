import { test as base } from "@playwright/test";

// Simple fixtures that provide test user data
export const test = base.extend({
  // Provides a consistent, valid test user
  // eslint-disable-next-line no-empty-pattern
  testUser: async ({}, use) => {
    const user = {
      username: "testuser",
      password: "password123",
      name: "Test User",
      email: "testuser@example.com",
      age: 30,
    };
    await use(user);
  },

  // Example invalid user data for negative tests
  // eslint-disable-next-line no-empty-pattern
  invalidUser: async ({}, use) => {
    const invalid = {
      username: "",
      password: "",
      email: "notanemail",
      age: "not-a-number",
    };
    await use(invalid);
  },
});

export { expect } from "@playwright/test";
