//Lecture 13 Homework Assignment: Data-Driven Testing, Hooks, Fixtures & Configuration
//Task 2: Hooks for Automatic Setup/Cleanup
//A spec demonstrating API test data setup/cleanup with request inside hooks.

import { test, expect } from "@playwright/test";

let createdPostId;

test.beforeEach(async ({ request }) => {
  console.log("\n beforeEach: creating a new post");
  const response = await request.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      data: {
        title: "Test Post",
        body: "This is a test post body",
        userId: 123,
      },
    }
  );

  expect(response.status()).toBe(201);
  const json = await response.json();
  createdPostId = json.id;
  console.log(`Created post with id: ${createdPostId}`);
});

test.afterEach(async ({ request }) => {
  console.log(`afterEach: deleting post ${createdPostId}`);
  const response = await request.delete(
    `https://jsonplaceholder.typicode.com/posts/ ${createdPostId}`
  );
  expect(response.status()).toBe(200);
  console.log("✅ Post deleted\n");
});

test("update existing post with dynamic context", async ({ request }) => {
  console.log("✏️ Updating post 1 with dynamic title");
  const response = await request.put(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
      data: {
        id: 1,
        title: `Updated with created id ${createdPostId}`,
        body: "Updated body",
        userId: 1,
      },
    }
  );

  expect(response.status()).toBe(200);
  const json = await response.json();
  expect(json.title).toContain(`${createdPostId}`);
  console.log("✅ Update test passed");
});

test("create comment referencing created postId", async ({ request }) => {
  console.log(" Creating comment for created post");
  const response = await request.post(
    "https://jsonplaceholder.typicode.com/comments",
    {
      data: {
        postId: createdPostId,
        name: "Test Comment",
        email: "test@example.com",
        body: "This is a comment body",
      },
    }
  );

  expect(response.status()).toBe(201);
  const json = await response.json();
  expect(json.postId).toBe(createdPostId);
  console.log("✅ Comment creation test passed");
});
