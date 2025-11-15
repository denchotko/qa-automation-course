//Lecture 12 -Homework Assignment: API Testing Fundamentals
//Build a small, maintainable API test suite using Playwright and practice
//GET, POST, PUT and DELETE request
//Integration Task: Full CRUD Flow and Validations (Posts)
//Objective:Combine what you built to execute an end-to-end workflow with minimal new code, reusing your tests and (if created) the helper.

import { test, expect } from "@playwright/test";
import { PostsAPI } from "../helpers/PostsAPI.js";

test("complete CRUD workflow", async ({ request }) => {
  const api = new PostsAPI(request);

  // 1. Create
  const payload = {
    title: "Integration Test",
    body: "Lecture 12 CRUD",
    userId: 99,
  };
  const created = await api.createPost(payload);
  expect(created.status).toBe(201);
  expect(created.data).toHaveProperty("id");
  expect(created.data.title).toBe(payload.title);
  expect(created.data.body).toBe(payload.body);

  // 2️. Read (JSONPlaceholder doesn’t persist new posts, so allow 200 or 404)
  const fetched = await api.getPostById(1);
  expect([200, 404]).toContain(fetched.status);
  if (fetched.status === 200) {
    expect(fetched.data.id).toBe(1);
  }

  // 3. Update (use a known existing id to ensure reliable 200)
  const updatedPayload = { ...payload, title: "Updated Integration Title" };
  const updated = await api.updatePost(1, updatedPayload);
  expect(updated.status).toBe(200);
  expect(updated.data.title).toBe("Updated Integration Title");

  // 4️. Delete (delete the same existing id)
  const deleted = await api.deletePost(1);
  expect(deleted.status).toBe(200);
  expect(deleted.data).toEqual({});
});
