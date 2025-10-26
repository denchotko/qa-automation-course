//Lecture 6 - Homework Assignment: Objects, Classes, and JSON
//The primary goal is to practice using JavaScript Objects, Arrays, and Classes to structure, analyze, and serialize test data.
// You will move from modeling individual test results to building a complete, reusable reporting tool and preparing its data for exchange via JSON.
// Task 2:Use classes to create consistent, reusable structures for test users and test cases. Practice constructors, this, and instance methods.

//Implement a TestUser class
export class TestUser {
  constructor(username, email, password, role, active) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
    this.isActive = active;
  }

  isValidEmail() {
    return this.email.includes("@") && this.email.length >= 6;
  }

  isValidPassword() {
    return this.password && this.password.length >= 8;
  }

  validate() {
    return this.isValidEmail() && this.isValidPassword();
  }
  getInfo() {
    return `User: ${this.username}, Role: ${this.role}, Active: ${this.isActive}`;
  }
}

//Implement TestCase class
export class TestCase {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.status = "PENDING";
    this.duration = 0;
  }
  start() {
    this.status = "RUNNING";
  }

  complete(status, durationMs) {
    this.status = status;
    this.duration = durationMs;
  }

  getSummary() {
    let formattedDuration =
      this.duration >= 1000
        ? (this.duration / 1000).toFixed(1) + "s"
        : this.duration + "ms";

    return `Test: ${this.name}, Status: ${this.status}, Duration: ${formattedDuration}`;
  }
}

// Create TestUser instances
const user1 = new TestUser(
  "user1",
  "user1@example.com",
  "pass1234",
  "qa",
  true
);
const user2 = new TestUser("user2", "invalidemail.com", "short", "dev", false);

console.log("User 1 Info:", user1.getInfo());
console.log("User 1 Valid:", user1.validate());
console.log("User 2 Info:", user2.getInfo());
console.log("User 2 Valid:", user2.validate());

// Create TestCase instances
const test1 = new TestCase("login_test", "Checks login with valid credentials");
const test2 = new TestCase("logout_test", "Ensures logout clears session");

test1.start();
test1.complete("PASS", 850);

test2.start();
test2.complete("FAIL", 1450);

console.log("Test 1 Summary:", test1.getSummary());
console.log("Test 2 Summary:", test2.getSummary());
