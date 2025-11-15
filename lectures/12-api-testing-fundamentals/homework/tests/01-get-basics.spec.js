//Lecture 12 -Homework Assignment: API Testing Fundamentals
//Build a small, maintainable API test suite using Playwright and practice
//GET, POST, PUT and DELETE request
//Task 1: First GET and Status Validation (Posts)

import { test, expect } from "@playwright/test";

test("fetch a single post - basics", async ({ request }) => {
  console.log("Sending GET request to fetch a single post with ID 1...");

  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  console.log("Response received!");
  console.log("Status code:", response.status());
  console.log("Status text:", response.statusText());

  expect(response.status()).toBe(200);
  expect(response.statusText()).toBe("OK");

  console.log("✓ Response ok flag:", response.ok());
  expect(response.ok()).toBeTruthy();

  const post = await response.json();
  console.log("Parsed post object:", JSON.stringify(post, null, 2));

  expect(post.id).toBe(1);
  expect(post).toHaveProperty("userId");
  expect(post).toHaveProperty("title");
  expect(post).toHaveProperty("body");

  console.log("✓ All assertions passed successfully!");
});

test("fetch all post - basics", async ({ request }) => {
  console.log("Sending GET request to fetch all posts");

  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts/"
  );

  console.log("Response received!");
  console.log("Status code:", response.status());
  console.log("Status text:", response.statusText());

  expect(response.status()).toBe(200);
  expect(response.statusText()).toBe("OK");

  console.log("✓ Response ok flag:", response.ok());
  expect(response.ok()).toBeTruthy();

  const post = await response.json();
  console.log("Parsed post object:", JSON.stringify(post, null, 2));

  const posts = await response.json();
  console.log("Parsed posts array, length:", posts.length);

  expect(Array.isArray(posts)).toBeTruthy();
  expect(posts.length).toBeGreaterThan(0);

  console.log("✓ All assertions for all posts passed!");
});
