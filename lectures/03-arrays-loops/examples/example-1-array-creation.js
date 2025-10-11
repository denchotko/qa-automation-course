//Instead of this(inefficient and hard to menage):

let testUser1 = "john@test.com";
let testUser2 = "sarah@test.com";
let testUser3 = "mike@test.com";
let testUser4 = "anna@test.com";

// We can use this (efficient and scalable):
let testUsers = [
  "john@test.com",
  "sarah@test.com",
  "mike@test.com",
  "anna@test.com",
];
console.log("All test users:", testUsers);
