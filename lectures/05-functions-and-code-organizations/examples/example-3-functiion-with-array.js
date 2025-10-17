let names = ["login_test", "logout_test", "register_Test"];
let results = ["PASS", "FAIL", "PASS"];

function findFailedTest(testNames, testResults) {
  let failedTests = [];
  for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === "FAIL") {
      failedTests.push(testNames[i]);
    }
  }
  return failedTests;
}

let failures = findFailedTest(names, results);
console.log("Failed tests:", failures);
