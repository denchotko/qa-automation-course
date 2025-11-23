import { test, expect } from "@playwright/test";

test("performance: API testing is fast", async ({ request }) => {
  const startTime = Date.now();

  // Make 10 API calls
  const promises = [];
  for (let i = 1; i <= 10; i++) {
    promises.push(
      request.get(`https://jsonplaceholder.typicode.com/users/${i}`)
    );
  }

  await Promise.all(promises);

  const endTime = Date.now();
  const duration = endTime - startTime;

  console.log(`✓ Made 10 API calls in ${duration}ms`);
  // Typically completes in less than 1 second!
  expect(duration).toBeLessThan(5000); // Should be under 5 seconds
});
