//Lecture 12 -Homework Assignment: API Testing Fundamentals
//Build a small, maintainable API test suite using Playwright and practice
//GET, POST, PUT and DELETE request
//Task 5: Optional Helper — PostsAPI class
//Build a PostsAPI class that accepts request in its constructor and exposes methods for:
//getting all posts, getting by id, filtering by user, creating, updating, deleting, and searching by title.

import { test, expect } from "@playwright/test";
import { PostsAPI } from "../helpers/PostsAPI";

test.describe("PostsAPI helper flow", () => {
  test("create → get → update → delete flow", async ({ request }) => {
    const api = new PostsAPI(request); // ✅ instantiate inside the test

    // === CREATE===
    const payload = { title: "Hello World", body: "Testing flow", userId: 99 };
    const created = await api.createPost(payload);
    expect(created.status).toBe(201);
    expect(created.data.title).toBe(payload.title);

    // === GET====
    const fetched = await api.getPostById(1);
    expect(fetched.status).toBe(200);
    expect(fetched.data.id).toBe(1);

    // === POST===
    const updatedPayload = { ...payload, title: "Updated Title" };
    const updated = await api.updatePost(1, updatedPayload);
    expect(updated.status).toBe(200);
    expect(updated.data.title).toBe("Updated Title");

    // === DELETE ===
    const deleted = await api.deletePost(1);
    expect(deleted.status).toBe(200);
    expect(deleted.data).toEqual({});
  });

  test("searchPostsByTitle demo", async ({ request }) => {
    const api = new PostsAPI(request);

    const result = await api.searchPostsByTitle("sunt");
    expect(result.status).toBe(200);
    expect(result.data.length).toBeGreaterThan(0);
    expect(result.data.some((p) => p.title.includes("sunt"))).toBeTruthy();
  });
});
