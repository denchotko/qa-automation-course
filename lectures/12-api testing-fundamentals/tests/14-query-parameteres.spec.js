import { test, expect } from "@playwright/test";

test("filter posts by userId", async ({ request }) => {
  // Get posts for user 1 using query parameter
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts?userId=1"
  );

  expect(response.status()).toBe(200);
  const posts = await response.json();

  console.log(`Found ${posts.length} posts for user 1`);

  // Verify all posts belong to user 1
  posts.forEach((post) => {
    expect(post.userId).toBe(1);
  });

  console.log("✓ All posts filtered correctly");
});

test("limit number of results", async ({ request }) => {
  // Get only first 5 posts
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  const posts = await response.json();

  console.log(`Requested 5 posts, received ${posts.length}`);
  expect(posts.length).toBe(5);

  // Verify IDs are 1-5
  expect(posts[0].id).toBe(1);
  expect(posts[4].id).toBe(5);
});

test("combine multiple query parameters", async ({ request }) => {
  // Get first 3 posts from user 2
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts?userId=2&_limit=3"
  );

  const posts = await response.json();

  console.log(`Found ${posts.length} posts for user 2 (limited to 3)`);
  expect(posts.length).toBe(3);

  // Verify all belong to user 2
  posts.forEach((post) => {
    expect(post.userId).toBe(2);
  });
});

test("search comments by post", async ({ request }) => {
  // Get comments for post 1
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/comments?postId=1"
  );

  const comments = await response.json();

  console.log(`Post 1 has ${comments.length} comments`);
  expect(comments.length).toBeGreaterThan(0);

  // Verify all comments belong to post 1
  comments.forEach((comment) => {
    expect(comment.postId).toBe(1);
  });

  // Verify comment structure
  expect(comments[0]).toHaveProperty("id");
  expect(comments[0]).toHaveProperty("name");
  expect(comments[0]).toHaveProperty("email");
  expect(comments[0]).toHaveProperty("body");
});
