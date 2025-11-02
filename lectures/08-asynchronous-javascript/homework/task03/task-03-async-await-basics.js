//Lecture 8: Homework Assignment: Asynchronous JavaScript
//Task03: Use async and await to write readable asynchronous code that performs the same work as .then() but with cleaner flow.

//Reuse simulateApiCall from previuos task
import { simulateApiCall } from "../task02/task-02-then-catch.js";

//Async wrapper for a single API operation
async function runSingleOperation(name, shouldFail) {
  console.log(`Srating operation: ${name}`);
  const result = await simulateApiCall(name, shouldFail);
  console.log("Operation result:", result);
  return result;
}

//Demonstrate success
runSingleOperation("getUser", false).then(function (v) {
  console.log("Final returned value:", v);
});

//Demonstrate failure
runSingleOperation("failUser", true).then(function (v) {
  console.log("Unexpected sucess:", v);
});

//Export for reuse
export { runSingleOperation };
