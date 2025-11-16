export const validUsers = [
  { username: "admin", password: "admin123" },
  { username: "user", password: "user123" },
  { username: "manager", password: "manager123" },
];

export const invalidUsers = [
  { username: "", password: "password123", description: "empty username" },
  { username: "david", password: "", description: "empty password" },
  { username: "", password: "", description: "empty username and password" },
  { username: "eve", password: "wrongpass", description: "incorrect password" },
];
