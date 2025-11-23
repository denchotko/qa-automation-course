import { test, expect } from "@playwright/test";

test("validate array of users", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users = await response.json();

  // Verify it's an array
  expect(Array.isArray(users)).toBeTruthy();
  console.log(`Received ${users.length} users`);

  // Verify array length
  expect(users.length).toBeGreaterThan(0);
  expect(users.length).toBe(10);

  // Verify each user has required fields
  users.forEach((user) => {
    expect(user).toHaveProperty("id");
    expect(user).toHaveProperty("name");
    expect(user).toHaveProperty("email");
  });

  console.log("✓ All users have required fields");
});

test("find specific user in array", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users = await response.json();

  // Find user by name using .find() from Lecture 4
  const leanne = users.find((user) => user.name === "Leanne Graham");

  expect(leanne).toBeDefined();
  expect(leanne.id).toBe(1);
  expect(leanne.email).toBe("Sincere@april.biz");

  console.log(`Found user: ${leanne.name}`);
});

test("filter users by domain", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users = await response.json();

  // Filter users whose email ends with .biz using .filter() from Lecture 4
  const bizUsers = users.filter((user) => user.email.endsWith(".biz"));

  console.log(`Found ${bizUsers.length} users with .biz emails`);

  // Verify at least one user has .biz email
  expect(bizUsers.length).toBeGreaterThan(0);

  // Verify all filtered users have .biz emails
  bizUsers.forEach((user) => {
    expect(user.email).toContain(".biz");
  });
});

test("extract all user names using map", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users = await response.json();

  // Extract just names using .map() from Lecture 4
  const userNames = users.map((user) => user.name);

  console.log("All user names:", userNames);

  expect(userNames.length).toBe(10);
  expect(userNames).toContain("Leanne Graham");
  expect(userNames).toContain("Ervin Howell");
});

test("check if all users have valid emails", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users = await response.json();

  // Check if every user has @ in email using .every()
  const allEmailsValid = users.every((user) => user.email.includes("@"));

  expect(allEmailsValid).toBeTruthy();
  console.log("✓ All users have valid email format");
});
