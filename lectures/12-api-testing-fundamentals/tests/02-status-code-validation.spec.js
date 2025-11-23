import { test, expect } from "@playwright/test";

test("status code validation examples", async ({ request }) => {
  // Successful GET
  const response1 = await request.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  expect(response1.status()).toBe(200);
  expect(response1.ok()).toBeTruthy();

  // Not Found
  const response2 = await request.get(
    "https://jsonplaceholder.typicode.com/users/99999"
  );
  expect(response2.status()).toBe(404);
  expect(response2.ok()).toBeFalsy(); // 404 is not "ok"

  // Alternative: check status ranges
  expect(response1.status()).toBeGreaterThanOrEqual(200);
  expect(response1.status()).toBeLessThan(300);
});
