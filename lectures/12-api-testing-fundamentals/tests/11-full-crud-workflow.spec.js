import { test, expect } from "@playwright/test";

test("complete CRUD workflow for a post", async ({ request }) => {
  // ===== CREATE (POST) =====
  console.log("\n=== CREATE ===");
  const newPost = {
    title: "Testing CRUD Operations",
    body: "This post will be created, read, updated, and deleted.",
    userId: 1,
  };

  const createResponse = await request.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      data: newPost,
    }
  );

  expect(createResponse.status()).toBe(201);
  const createdPost = await createResponse.json();
  const postId = createdPost.id;

  console.log(`✓ Created post with ID: ${postId}`);
  expect(createdPost.title).toBe(newPost.title);

  // ===== READ (GET) =====
  console.log("\n=== READ ===");
  const readResponse = await request.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  expect(readResponse.status()).toBe(200);
  const readPost = await readResponse.json();

  console.log(`✓ Read post with ID: ${postId}`);
  expect(readPost.id).toBe(postId);
  expect(readPost.title).toBe(newPost.title);

  // ===== UPDATE (PUT) =====
  console.log("\n=== UPDATE ===");
  const updatedData = {
    ...readPost, // Keep existing fields
    title: "Updated Title - Testing Complete",
    body: "This post has been updated.",
  };

  const updateResponse = await request.put(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      data: updatedData,
    }
  );

  expect(updateResponse.status()).toBe(200);
  const updatedPost = await updateResponse.json();

  console.log(`✓ Updated post with ID: ${postId}`);
  expect(updatedPost.title).toBe("Updated Title - Testing Complete");

  // ===== DELETE (DELETE) =====
  console.log("\n=== DELETE ===");
  const deleteResponse = await request.delete(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  expect(deleteResponse.status()).toBe(200);
  console.log(`✓ Deleted post with ID: ${postId}`);

  console.log("\n✓ Complete CRUD workflow successful!");
});
