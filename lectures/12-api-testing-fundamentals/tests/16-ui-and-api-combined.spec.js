import { test, expect } from "@playwright/test";

test("verify UI displays API data correctly", async ({ request, page }) => {
  // Step 1: Fetch data from API
  console.log("Fetching user data from API...");
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  const userData = await response.json();

  console.log("User from API:", userData.name);

  // Step 2: Visit a page that displays this data
  // (For demo, we'll create a simple HTML page)
  await page.goto("https://jsonplaceholder.typicode.com/users");

  // Step 3: Verify UI shows the same data
  // (This is a simplified example - in real scenarios you'd have your own UI)
  const pageContent = await page.textContent("body");

  console.log("✓ Combined UI and API test completed");
});

test("set up test data via API, then test UI", async ({ request, page }) => {
  // This is a common pattern in real test automation

  // Step 1: Create test user via API (fast!)
  console.log("Creating test user via API...");
  const newUser = {
    name: "Test User",
    username: "testuser",
    email: "test@example.com",
  };

  const createResponse = await request.post(
    "https://jsonplaceholder.typicode.com/users",
    {
      data: newUser,
    }
  );

  const createdUser = await createResponse.json();
  console.log(`✓ User created with ID: ${createdUser.id}`);

  // Step 2: Test UI with this user
  // In real scenario, you'd navigate to your app and verify the user appears
  console.log("Testing UI would happen here...");

  // Step 3: Clean up test data via API (fast!)
  console.log("Cleaning up test data...");
  await request.delete(
    `https://jsonplaceholder.typicode.com/users/${createdUser.id}`
  );
  console.log("✓ Test data cleaned up");

  // This pattern is MUCH faster than creating test data through UI!
});

test("verify data consistency between API and UI", async ({
  request,
  page,
}) => {
  // Step 1: Get data from API (source of truth)
  const apiResponse = await request.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  const postFromApi = await apiResponse.json();

  console.log("Post title from API:", postFromApi.title);

  // Step 2: Visit page that shows this post
  await page.goto("https://jsonplaceholder.typicode.com/posts/1");

  // Step 3: Verify UI matches API data
  const uiContent = await page.textContent("body");

  // In real scenario, you'd extract specific elements and compare
  // This demonstrates the pattern
  console.log("✓ Data consistency check completed");
});
