import { test, expect } from "@playwright/test";

test("sending requests with custom headers", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users/1",
    {
      headers: {
        Accept: "application/json",
        "User-Agent": "Playwright-Test",
      },
    }
  );

  expect(response.status()).toBe(200);

  // Check response headers
  const contentType = response.headers()["content-type"];
  console.log("Content-Type:", contentType);
  expect(contentType).toContain("application/json");
});

test("POST with authorization header", async ({ request }) => {
  const response = await request.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      headers: {
        Authorization: "Bearer fake-token-for-testing",
        "Content-Type": "application/json",
      },
      data: {
        title: "Authenticated Post",
        body: "This request includes auth header",
        userId: 1,
      },
    }
  );

  expect(response.status()).toBe(201);
  console.log("✓ Request with auth header successful");
});
