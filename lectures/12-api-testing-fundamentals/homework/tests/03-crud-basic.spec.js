//Lecture 12 -Homework Assignment: API Testing Fundamentals
//Build a small, maintainable API test suite using Playwright and practice
//GET, POST, PUT and DELETE request
//CRUD with POST, PUT, DELETE (Posts)

import { test, expect } from "@playwright/test";

//POST test: Creates a new post, asserts status 201, checks that the response contains the sent values, and verifies an id was assigned
test("create post with POST", async ({ request }) => {
  console.log("Preparing payload for new post...");
  const payload = {
    title: "My new post",
    body: "This is the body of my post",
    userId: 123,
  };
  const response = await request.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      data: payload,
    }
  );

  console.log("Response received!");
  expect(response.status()).toBe(201);

  const created = await response.json();
  console.log("Created post:", JSON.stringify(created, null, 2));

  // Assert response includes sent values
  expect(created.title).toBe(payload.title);
  expect(created.body).toBe(payload.body);
  expect(created.userId).toBe(payload.userId);

  // JSONPlaceholder assigns an id
  expect(created).toHaveProperty("id");
  console.log("✓ Post creation assertions passed!");
});

//PUT test: Updates post 1, asserts status 200, and checks that the returned JSON reflects the updated fields
test("update post with PUT", async ({ request }) => {
  console.log("Sending PUT request to update post with ID 1...");
  const updatedPayload = {
    id: 1,
    title: "Updated title",
    body: "Updated body content",
    userId: 1,
  };

  const response = await request.put(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
      data: updatedPayload,
    }
  );
  console.log("📡 Response received!");
  expect(response.status()).toBe(200);

  const updated = await response.json();
  console.log("Updated post:", JSON.stringify(updated, null, 2));

  // Assert updated fields are reflected
  expect(updated.title).toBe(updatedPayload.title);
  expect(updated.body).toBe(updatedPayload.body);
  console.log("✓ Post update assertions passed!");
});

//DELETE test: Deletes post 1, asserts status 200, and verifies the body is {}
test("delete post with DELETE", async ({ request }) => {
  console.log("Sending DELETE request for post with ID 1...");
  const response = await request.delete(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  console.log("📡 Response received!");
  expect(response.status()).toBe(200);

  const deleted = await response.json();
  console.log("Delete response body:", JSON.stringify(deleted, null, 2));

  // JSONPlaceholder typically returns {}
  expect(deleted).toEqual({});
  console.log("✓ Post deletion assertions passed!");
});
