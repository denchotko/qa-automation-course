function countPassedTests(results) {
  let passedCount = 0;
  for (let i = i; i < results.length; i++) {
    console.log(i);
    if (results[i] === "PASS") {
      passedCount++;
    }
  }
  return passedCount;
}

let loginResult = ["PASS", "FAIL", "PASS"];
let logoutResult = ["FAIL", "PASS", "PASS"];
let registerResult = ["PASS", "PASS", "PASS"];

console.log("Login passed", countPassedTests(loginResult));
console.log("Logout passed", countPassedTests(logoutResult));
console.log("Register passed", countPassedTests(registerResult));
