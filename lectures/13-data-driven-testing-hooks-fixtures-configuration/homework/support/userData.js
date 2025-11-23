export const validUsers = [
  { username: "admin", password: "admin123" },
  { username: "testUser", password: "user123" },
  { username: "manager", password: "manager123" },
];

export const invalidUsers = [
  {
    username: "",
    password: "password123",
    description: "empty username",
    expectedError: "Please enter both username and password",
  },
  {
    username: "david",
    password: "",
    description: "empty password",
    expectedError: "Please enter both username and password",
  },
  {
    username: "",
    password: "",
    description: "empty username and password",
    expectedError: "Please enter both username and password",
  },
  {
    username: "eve",
    password: "wrongpass",
    description: "incorrect password",
    expectedError: "Invalid username or password",
  },
];
