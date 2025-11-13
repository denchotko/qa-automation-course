import { test, expect } from "@playwright/test";

test("validate user has all required fields", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  const user = await response.json();

  // Verify user has all required properties
  expect(user).toHaveProperty("id");
  expect(user).toHaveProperty("name");
  expect(user).toHaveProperty("username");
  expect(user).toHaveProperty("email");
  expect(user).toHaveProperty("address");
  expect(user).toHaveProperty("phone");
  expect(user).toHaveProperty("website");
  expect(user).toHaveProperty("company");

  console.log("✓ User has all required fields");
});

test("validate user data types", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  const user = await response.json();

  // Verify data types
  expect(typeof user.id).toBe("number");
  expect(typeof user.name).toBe("string");
  expect(typeof user.email).toBe("string");
  expect(typeof user.address).toBe("object");

  console.log("✓ All data types are correct");
});

test("validate email format", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  const user = await response.json();

  // Verify email contains @ symbol (simple validation)
  expect(user.email).toContain("@");

  // More thorough: check email format with regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  expect(user.email).toMatch(emailRegex);

  console.log(`✓ Email ${user.email} is valid format`);
});

test("validate nested address object", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  const user = await response.json();

  // Verify address structure
  expect(user.address).toHaveProperty("street");
  expect(user.address).toHaveProperty("suite");
  expect(user.address).toHaveProperty("city");
  expect(user.address).toHaveProperty("zipcode");
  expect(user.address).toHaveProperty("geo");

  // Verify geo has coordinates
  expect(user.address.geo).toHaveProperty("lat");
  expect(user.address.geo).toHaveProperty("lng");

  // Verify coordinates are strings (in this API)
  expect(typeof user.address.geo.lat).toBe("string");
  expect(typeof user.address.geo.lng).toBe("string");

  console.log(`✓ Address structure is valid for ${user.address.city}`);
});
