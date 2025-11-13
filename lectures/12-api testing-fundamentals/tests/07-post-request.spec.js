import { test, expect } from "@playwright/test";

test("create a new user with POST", async ({ request }) => {
  // Prepare data to send
  const newUser = {
    name: "John Doe",
    username: "johndoe",
    email: "john.doe@example.com",
  };

  console.log("Creating user:", JSON.stringify(newUser, null, 2));

  // Send POST request
  const response = await request.post(
    "https://jsonplaceholder.typicode.com/users",
    {
      data: newUser,
    }
  );

  // POST for creating resources should return 201 Created
  console.log("Status:", response.status());
  expect(response.status()).toBe(201);

  // Get created user from response
  const createdUser = await response.json();
  console.log("Created user:", JSON.stringify(createdUser, null, 2));

  // Verify the response includes our data
  expect(createdUser.name).toBe(newUser.name);
  expect(createdUser.username).toBe(newUser.username);
  expect(createdUser.email).toBe(newUser.email);

  // API should assign an ID
  expect(createdUser).toHaveProperty("id");
  console.log(`✓ User created with ID: ${createdUser.id}`);
});

test("create a post (article) with POST", async ({ request }) => {
  const newPost = {
    title: "My First Post",
    body: "This is the content of my post. It can be long text.",
    userId: 1,
  };

  const response = await request.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      data: newPost,
    }
  );

  expect(response.status()).toBe(201);

  const createdPost = await response.json();

  expect(createdPost.title).toBe(newPost.title);
  expect(createdPost.body).toBe(newPost.body);
  expect(createdPost.userId).toBe(newPost.userId);
  expect(createdPost.id).toBeDefined();

  console.log(`✓ Post created with ID: ${createdPost.id}`);
});

test("validate POST with missing required fields", async ({ request }) => {
  // Try to create user without required email field
  const incompleteUser = {
    name: "Incomplete User",
    // Missing email
  };

  const response = await request.post(
    "https://jsonplaceholder.typicode.com/users",
    {
      data: incompleteUser,
    }
  );

  // Note: JSONPlaceholder is lenient and will accept this
  // Real APIs would return 400 Bad Request
  console.log("Status:", response.status());

  // In a real API, you'd expect:
  // expect(response.status()).toBe(400);
});