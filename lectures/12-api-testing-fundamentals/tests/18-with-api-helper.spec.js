import { test, expect } from "@playwright/test";
import { UsersAPI } from "./17-UsersAPI.js";

test("use API helper to get users", async ({ request }) => {
  const usersAPI = new UsersAPI(request);

  // Clean, readable API calls
  const result = await usersAPI.getAllUsers();

  expect(result.status).toBe(200);
  expect(Array.isArray(result.data)).toBeTruthy();
  expect(result.data.length).toBe(10);

  console.log(`✓ Retrieved ${result.data.length} users using helper`);
});

test("use API helper for full CRUD workflow", async ({ request }) => {
  const usersAPI = new UsersAPI(request);

  // CREATE
  const newUser = {
    name: "API Helper User",
    username: "apiuser",
    email: "api@example.com",
  };

  const createResult = await usersAPI.createUser(newUser);
  expect(createResult.status).toBe(201);
  const userId = createResult.data.id;
  console.log(`✓ Created user with ID: ${userId}`);

  // READ
  const getResult = await usersAPI.getUserById(userId);
  expect(getResult.status).toBe(200);
  expect(getResult.data.name).toBe(newUser.name);
  console.log(`✓ Retrieved user: ${getResult.data.name}`);

  // UPDATE
  const updateResult = await usersAPI.updateUser(userId, {
    name: "Updated API Helper User",
  });
  expect(updateResult.status).toBe(200);
  expect(updateResult.data.name).toBe("Updated API Helper User");
  console.log("✓ Updated user");

  // DELETE
  const deleteResult = await usersAPI.deleteUser(userId);
  expect(deleteResult.status).toBe(200);
  console.log("✓ Deleted user");

  console.log("\n✓ Complete CRUD workflow with API helper successful!");
});

test("search users using helper", async ({ request }) => {
  const usersAPI = new UsersAPI(request);

  const matchingUsers = await usersAPI.searchUsersByName("Leanne");

  console.log(`Found ${matchingUsers.length} users matching "Leanne"`);
  expect(matchingUsers.length).toBeGreaterThan(0);
  expect(matchingUsers[0].name).toContain("Leanne");

  console.log(`✓ Found: ${matchingUsers[0].name}`);
});
