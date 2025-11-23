//Lecture 12 -Homework Assignment: API Testing Fundamentals
//Build a small, maintainable API test suite using Playwright and practice
//GET, POST, PUT and DELETE request
//Task 2: JSON Structure and Field Validation (Posts)

import { test, expect } from "@playwright/test";

test("post has required top-level fields", async ({ request }) => {
  console.log("Sending GET request to fetch a single post with ID 1...");
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();

  const post = await response.json();
  console.log("Parsed post object:", JSON.stringify(post, null, 2));

  expect(post).toHaveProperty("userId");
  expect(post).toHaveProperty("id");
  expect(post).toHaveProperty("title");
  expect(post).toHaveProperty("body");

  console.log("✓ Required top-level fields are present!");
});

test("post field types are correct", async ({ request }) => {
  console.log("Fetching post with ID 1 to check field types...");
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  expect(response.status()).toBe(200);
  const post = await response.json();

  console.log("Checking field types...");
  expect(typeof post.userId).toBe("number");
  expect(typeof post.id).toBe("number");
  expect(typeof post.title).toBe("string");
  expect(typeof post.body).toBe("string");

  console.log("✓ Field type assertions passed!");
});

test("post strings are non-empty", async ({ request }) => {
  console.log("Fetching post with ID 1 to check non-empty strings");
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  expect(response.status()).toBe(200);
  const post = await response.json();

  const stringFields = ["title", "body"];
  console.log(
    `Checking ${stringFields.length} string fields for non-empty values...`
  );

  stringFields.forEach((field) => {
    expect(post).toHaveProperty(field); // defensive check
    expect(typeof post[field]).toBe("string"); // type check
    expect(post[field].length).toBeGreaterThan(0); // non-empty check
    console.log(`✅ ${field} is a non-empty string`);
  });

  console.log("✓ All string non-empty assertions passed!");
});
