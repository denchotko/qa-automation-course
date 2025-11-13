import { test, expect } from "@playwright/test";

test("delete a user with DELETE", async ({ request }) => {
  console.log("Deleting user with ID 1...");

  const response = await request.delete(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  // DELETE typically returns 200 OK or 204 No Content
  console.log("Status:", response.status());
  expect(response.status()).toBe(200);

  console.log("✓ User deleted successfully");
});

test("delete a post with DELETE", async ({ request }) => {
  const response = await request.delete(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  expect(response.status()).toBe(200);

  // DELETE might return empty body
  const result = await response.json();
  console.log("Delete response:", result);

  console.log("✓ Post deleted successfully");
});

test("try to delete non-existent resource", async ({ request }) => {
  const response = await request.delete(
    "https://jsonplaceholder.typicode.com/users/99999"
  );

  console.log("Status:", response.status());

  // JSONPlaceholder returns 200 even for non-existent resources
  // Real APIs would return 404 Not Found
  // expect(response.status()).toBe(404);
});
