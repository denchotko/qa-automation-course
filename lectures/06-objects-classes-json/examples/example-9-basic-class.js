class TestUser {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.isActive = true;
  }
  // Method available to all instances
  validate() {
    return this.email.includes("@") && this.password.length >= 6;
  }
  getiInfo() {
    return `User: ${this.username} (${this.email})`;
  }
}
// Creating instances with the 'new' keyword
let user1 = new TestUser("testuser1", "user1@test.com", "password123");
let user2 = new TestUser("testuser2", "user2@test.com", "123password");

console.log("User1:", user1.getiInfo());
console.log("User2:", user2.getiInfo());
console.log("User 1 valid:", user1.validate());
console.log("User 2 valid:", user2.validate());
