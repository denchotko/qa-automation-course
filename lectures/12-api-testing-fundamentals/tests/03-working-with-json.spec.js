import { test, expect } from "@playwright/test";

test("working with JSON response data", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  // Parse JSON response
  const user = await response.json();

  // user is now a JavaScript object
  console.log(typeof user); // "object"

  // Access properties like any object
  console.log(user.name); // "Leanne Graham"
  console.log(user.email); // "Sincere@april.biz"

  // Nested objects
  console.log(user.address.city); // "Gwenborough"
  console.log(user.address.geo.lat); // "-37.3159"

  // Verify nested properties
  expect(user.address).toHaveProperty("street");
  expect(user.address.city).toBe("Gwenborough");
  expect(user.address.geo.lat).toBe("-37.3159");
});
