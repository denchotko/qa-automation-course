let allResults = ["PASS", "PASS", "PASS", "SKIP", "FAIL", "PASS"];

//Get  only the failed tests
let failedResults = allResults.filter(function (result) {
  return result === "FAIL";
});

console.log("All results:", allResults);
console.log("Failed results:", failedResults);
console.log("Total failed tests", failedResults.length);

//
let completedTests = allResults.filter(function (result) {
  return result === "PASS" || result === "FAIL";
});
console.log("Completed tests:", completedTests);
