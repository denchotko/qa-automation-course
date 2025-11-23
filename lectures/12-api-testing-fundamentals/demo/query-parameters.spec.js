import { test, expect } from "@playwright/test";

test("demo filter posts by userID", async ({ request }) => {
  let response = await request.get(
    "https://jsonplaceholder.typicode.com/posts?userId=2&_limit=5"
  );
  expect(response.status()).toBe(200);
  const posts = await response.json();

  console.log(`Found ${posts.lenght} posts for user 2`);
  posts.forEach((post) => {
    expect(post.userId).toBe(2);
  });
});
