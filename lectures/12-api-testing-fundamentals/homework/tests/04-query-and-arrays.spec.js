//Lecture 12 -Homework Assignment: API Testing Fundamentals
//Build a small, maintainable API test suite using Playwright and practice
//GET, POST, PUT and DELETE request
//Query Parameters and Array Assertions (Posts)

import { test, expect } from "@playwright/test";

//Filter posts by userId.
test("filter posts by userId", async ({ request }) => {
  console.log("Fetching posts for userId=1...");
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts?userId=1"
  );

  expect(response.status()).toBe(200);
  const posts = await response.json();
  console.log(`Found ${posts.length} post fur useId=1`);

  //Using .forEach
  //posts.forEach((post) => {
  //  expect(post.userId).toBe(1);
  //});

  //Using .every
  expect(posts.every((post) => post.userId === 1)).toBeTruthy();

  console.log("✓ All posts belong to userId=1!");
});

//Limit results and assert exactly 5 posts returned.
test("limit results", async ({ request }) => {
  console.log("Fetching posts with limit=5...");
  let response = await request.get(
    "https://jsonplaceholder.typicode.com/posts?userId=1&_limit=5"
  );
  expect(response.status()).toBe(200);
  const posts = await response.json();

  console.log(`Found ${posts.length} posts`);
  expect(posts.length).toBe(5);

  console.log("✓ Limit results assertion passed!");
});

//Find a specific post and assert it exists and has required properties.
test("find a specific post in the collection", async ({ request }) => {
  console.log("➡️ Fetching all posts to find post with id=1...");
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  expect(response.status()).toBe(200);
  const posts = await response.json();

  const post = posts.find((p) => p.id === 1);
  console.log("Found post:", JSON.stringify(post, null, 2));

  expect(post).toBeTruthy();
  expect(post).toHaveProperty("userId");
  expect(post).toHaveProperty("id");
  expect(post).toHaveProperty("title");
  expect(post).toHaveProperty("body");

  console.log("🎉 Specific post assertions passed!");
});

//Extract and check titles - assert 100 titles exist and at least one contains "sunt".
test("extract and check titles with map", async ({ request }) => {
  console.log("Fetching all posts to extract titles...");
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  expect(response.status()).toBe(200);
  const posts = await response.json();

  const titles = posts.map((p) => p.title);
  console.log(`Extracted ${titles.length} titles`);

  expect(titles.length).toBe(100); // JSONPlaceholder returns 100 posts
  expect(titles.some((t) => t.includes("sunt"))).toBeTruthy();

  console.log("✓ Title extraction and keyword check passed!");
});
