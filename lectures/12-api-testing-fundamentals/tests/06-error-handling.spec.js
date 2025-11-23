import { test, expect } from "@playwright/test";

test("handle API errors gracefully", async ({ request }) => {
  try {
    // Try to get a user that doesn't exist
    const response = await request.get(
      "https://jsonplaceholder.typicode.com/users/99999"
    );

    console.log("Status:", response.status());

    // With JSONPlaceholder, this returns 404
    expect(response.status()).toBe(404);

    // Try to parse JSON - might be empty
    const data = await response.json();
    console.log("Response data:", data);
  } catch (error) {
    console.log("Error occurred:", error.message);
    // Some APIs might throw errors for 404s
    // Playwright's request API usually doesn't throw for HTTP errors
  }
});

test("handle network errors", async ({ request }) => {
  try {
    // Try to connect to non-existent server
    const response = await request.get(
      "https://this-domain-does-not-exist-12345.com"
    );

    // This line won't be reached if network fails
    console.log("Status:", response.status());
  } catch (error) {
    // Network error will be caught here
    console.log("Network error caught:", error.message);
    expect(error.message).toBeTruthy();
  }
});
