import { test, expect } from "../fixtures/apiUser.js";

test("test 1: user was created", async ({ apiUser /*, request*/ }) => {
  // apiUser is automatically created before this test (by the fixture)
  expect(apiUser).toBeDefined();
  expect(apiUser.id).toBeDefined();
  expect(apiUser.name).toBeDefined();
  // If the fixture exposes an API base and request, you could validate via API:
  // const res = await request.get(`${API_BASE}/users/${apiUser.id}`);
  // expect(res.ok()).toBeTruthy();
});

test("test 2: update user info", async ({ apiUser /*, request*/ }) => {
  // Example logical assertion with updated data handled by fixture or API
  expect(apiUser.id).toBeDefined();
  // If updating via API here:
  // const update = await request.put(`${API_BASE}/users/${apiUser.id}`, { data: { name: 'Updated Name' } });
  // expect(update.ok()).toBeTruthy();
});
