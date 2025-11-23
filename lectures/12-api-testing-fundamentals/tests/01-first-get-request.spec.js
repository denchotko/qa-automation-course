import { test, expect } from "@playwright/test";

test("fetch a single user - first API test", async ({ request }) => {
  console.log("Sending GET request to fetch user with ID 1...");

  // Step 1: Send GET request
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  console.log("Response received!");
  console.log("Status code:", response.status());

  // Step 2: Verify status code
  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy(); // ok() returns true for 200-299

  // Step 3: Get response body as JSON
  const user = await response.json();
  console.log("User data:", JSON.stringify(user, null, 2));

  // Step 4: Verify response data
  expect(user.id).toBe(1);
  expect(user.name).toBe("Leanne Graham");
  expect(user.email).toBe("Sincere@april.biz");

  console.log("✓ All assertions passed!");
});

test("fetch all users", async ({ request }) => {
  // Send GET request to get array of users
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  // Verify status
  expect(response.status()).toBe(200);

  // Get response as JSON array
  const users = await response.json();
  console.log(`Received ${users.length} users`);

  // Verify it's an array
  expect(Array.isArray(users)).toBeTruthy();

  // Verify array has 10 users
  expect(users.length).toBe(10);

  // Verify first user has expected properties
  expect(users[0]).toHaveProperty("id");
  expect(users[0]).toHaveProperty("name");
  expect(users[0]).toHaveProperty("email");

  console.log("First user:", users[0].name);
  console.log("Last user:", users[users.length - 1].name);
});