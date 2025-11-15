import { test, expect } from "@playwright/test";

test("demo create new user", async ({ request }) => {
  const user = {
    name: "John Doe",
    username: "johndoe",
    email: "john.doe@example.com",
  };
  const response = await request.post(
    "https://jsonplaceholder.typicode.com/users",
    {
      date: user,
    }
  );
  console.log("Status:", response.status());
  expect(response.status()).toBe(201);

  const createdUser = await response.json();
  console.log("Created user:", JSON.stringify(createdUser, null, 2));

  expect(createdUser.name).toBe(user.name);
  expect(createdUser.username).toBe(user.username);
  expect(createdUser.email).toBe(user.email);

  const expectedMessage =
    "An account already exists with the same email adress";
  expect(response.status()).toBe(409);
  expect(createdUser.message).toBe(expectedMessage);
});
