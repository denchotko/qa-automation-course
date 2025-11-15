import { test, expect } from "@playwright/test";

test("validate user with nested address", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  const user = await response.json();

  // Validate top-level properties
  expect(user).toHaveProperty("id");
  expect(user).toHaveProperty("name");
  expect(user).toHaveProperty("address");

  // Validate nested address object
  expect(user.address).toHaveProperty("street");
  expect(user.address).toHaveProperty("city");
  expect(user.address).toHaveProperty("zipcode");

  // Validate doubly-nested geo object
  expect(user.address).toHaveProperty("geo");
  expect(user.address.geo).toHaveProperty("lat");
  expect(user.address.geo).toHaveProperty("lng");

  // Validate specific values
  expect(typeof user.address.geo.lat).toBe("string");
  expect(typeof user.address.geo.lng).toBe("string");

  console.log("✓ Complex nested structure validated");
});

test("validate array of posts for a user", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts?userId=1"
  );
  const posts = await response.json();

  // Verify it's an array
  expect(Array.isArray(posts)).toBeTruthy();
  console.log(`User 1 has ${posts.length} posts`);

  // Verify each post has correct structure
  posts.forEach((post) => {
    expect(post).toHaveProperty("id");
    expect(post).toHaveProperty("title");
    expect(post).toHaveProperty("body");
    expect(post).toHaveProperty("userId");
    expect(post.userId).toBe(1); // All posts should belong to user 1
  });

  console.log("✓ All posts have correct structure");
});

test("validate and filter posts by title keyword", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const posts = await response.json();

  // Filter posts that contain "qui" in title
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes("qui")
  );

  console.log(`Found ${filteredPosts.length} posts with "qui" in title`);

  // Verify filtered results
  expect(filteredPosts.length).toBeGreaterThan(0);

  // Verify each filtered post contains the keyword
  filteredPosts.forEach((post) => {
    expect(post.title.toLowerCase()).toContain("qui");
  });

  // Log first few matching titles
  filteredPosts.slice(0, 3).forEach((post) => {
    console.log(`- ${post.title}`);
  });
});
