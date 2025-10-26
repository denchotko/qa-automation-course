let testResults = {
  testName: "login_test",
  status: "RUNNING",
};

console.log("Initial:", testResults);

//Adding new properties-Mitko is not fen of this!

testResults.executionTime = 800;
testResults.environment = "staging";

//Modifying properties
testResults.status = "PASS";

console.log("After modification:", testResults);

//Adding With bracket notation
testResults["retry-count"] = 0;
testResults["error_message"] = null;

//Deleting properties
delete testResults["testName"];
// delete testResults.testName;

console.log("Final result:", testResults);
