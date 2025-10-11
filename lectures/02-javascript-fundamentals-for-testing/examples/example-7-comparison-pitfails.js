// Be careful with these!
console.log("String vs Number:", "5" == 5); // true (loose equality)
console.log("Strict comparison:", "5" === 5); // false (different types)

// Always use === for testing to avoid surprises
let userId = "123";
let expectedId = 123;
console.log("Loose:", userId == expectedId); // true (but risky!) It is not recomended!
console.log("Strict:", userId === expectedId); // false (safer!) It's recomended to use strict!
