import { test, expect } from "@playwright/test";

test("verify all users have unique IDs", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users = await response.json();

  // Extract all IDs using .map()
  const userIds = users.map((user) => user.id);

  // Create Set to remove duplicates
  const uniqueIds = new Set(userIds);

  // If all IDs are unique, Set size should equal array length
  expect(uniqueIds.size).toBe(userIds.length);

  console.log(`✓ All ${users.length} users have unique IDs`);
});

test("verify all users have valid email domains", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users = await response.json();

  // Check if every user has @ in email using .every()
  const allValid = users.every((user) => {
    return user.email.includes("@") && user.email.includes(".");
  });

  expect(allValid).toBeTruthy();
  console.log("✓ All users have valid email format");

  // Extract unique domains
  const domains = users.map((user) => {
    const domain = user.email.split("@")[1];
    return domain;
  });

  console.log("Email domains:", [...new Set(domains)]);
});

test("find and verify specific user by email", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users = await response.json();

  // Find user by email using .find()
  const targetEmail = "Sincere@april.biz";
  const user = users.find((u) => u.email === targetEmail);

  expect(user).toBeDefined();
  expect(user.name).toBe("Leanne Graham");
  expect(user.id).toBe(1);

  console.log(`✓ Found user: ${user.name} (${user.email})`);
});

test("calculate statistics from API data", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users = await response.json();

  // Count users by company
  const companyCounts = {};
  users.forEach((user) => {
    const companyName = user.company.name;
    companyCounts[companyName] = (companyCounts[companyName] || 0) + 1;
  });

  console.log("Users per company:", companyCounts);

  // Verify we have company data for all users
  expect(Object.keys(companyCounts).length).toBeGreaterThan(0);

  // Count users in each city using .reduce()
  const cityCounts = users.reduce((acc, user) => {
    const city = user.address.city;
    acc[city] = (acc[city] || 0) + 1;
    return acc;
  }, {});

  console.log("Users per city:", cityCounts);
});

test("sort users by username alphabetically", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users = await response.json();

  // Sort users by username using .sort()
  const sortedUsers = [...users].sort((a, b) => {
    return a.username.localeCompare(b.username);
  });

  // Verify sorting
  const usernames = sortedUsers.map((u) => u.username);
  console.log("Sorted usernames:", usernames);

  // Check first and last
  expect(sortedUsers[0].username).toBeLessThan(
    sortedUsers[sortedUsers.length - 1].username
  );

  console.log(
    `✓ Users sorted from ${sortedUsers[0].username} to ${sortedUsers[sortedUsers.length - 1].username}`
  );
});
