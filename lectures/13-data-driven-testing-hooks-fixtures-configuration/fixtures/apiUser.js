import { test as base } from "@playwright/test";

// Fixture that creates a user via API (uses the built-in `request` fixture)
export const test = base.extend({
  apiUser: async ({ request }, use) => {
    // Using JSONPlaceholder as an example API that accepts POST
    const API_BASE = "https://jsonplaceholder.typicode.com";
    const createRes = await request.post(`${API_BASE}/users`, {
      data: {
        name: "API Test User",
        username: "apitestuser",
        email: "api@example.com",
      },
    });

    // If API responded ok, parse JSON; otherwise provide a fallback object
    let user;
    try {
      user = await createRes.json();
    } catch {
      user = {
        id: Date.now(),
        name: "API Test User",
        username: "apitestuser",
        email: "api@example.com",
      };
    }

    // Provide the created user to the test
    await use(user);

    // Cleanup: best-effort delete (some public APIs won't actually delete)
    try {
      await request.delete(`${API_BASE}/users/${user.id}`);
    } catch {
      // ignore cleanup errors
    }
  },
});

export { expect } from "@playwright/test";
