import { test, expect } from "@playwright/test";

test("update a user with PUT", async ({ request }) => {
  // Update user with ID 1
  const updatedData = {
    name: "Updated Name",
    username: "updateduser",
    email: "updated@example.com",
  };

  console.log("Updating user 1 with:", JSON.stringify(updatedData, null, 2));

  const response = await request.put(
    "https://jsonplaceholder.typicode.com/users/1",
    {
      data: updatedData,
    }
  );

  // PUT typically returns 200 OK
  expect(response.status()).toBe(200);

  const updatedUser = await response.json();
  console.log("Updated user:", JSON.stringify(updatedUser, null, 2));

  // Verify the data was updated
  expect(updatedUser.name).toBe(updatedData.name);
  expect(updatedUser.email).toBe(updatedData.email);

  console.log("✓ User updated successfully");
});

test("update a post with PUT", async ({ request }) => {
  const updatedPost = {
    id: 1,
    title: "Updated Title",
    body: "This post has been updated.",
    userId: 1,
  };

  const response = await request.put(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
      data: updatedPost,
    }
  );

  expect(response.status()).toBe(200);

  const result = await response.json();
  expect(result.title).toBe(updatedPost.title);
  expect(result.body).toBe(updatedPost.body);

  console.log("✓ Post updated successfully");
});

test("partial update - only update specific fields", async ({ request }) => {
  // Update only the name, leave other fields unchanged
  const partialUpdate = {
    name: "Only Name Changed",
  };

  const response = await request.put(
    "https://jsonplaceholder.typicode.com/users/1",
    {
      data: partialUpdate,
    }
  );

  expect(response.status()).toBe(200);

  const result = await response.json();
  expect(result.name).toBe("Only Name Changed");

  console.log("✓ Partial update successful");
});
