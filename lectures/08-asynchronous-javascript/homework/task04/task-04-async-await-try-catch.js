//Lecture 8: Homework Assignment: Asynchronous JavaScript
//Task 4:Handling Rejections with async/await + try/catch
//Use try/catch inside an async function to handle errors from await safely and return a consistent, test-friendly result.

//Reuse simulateApiCall from Task 2
import { simulateApiCall } from "../task02/task-02-then-catch.js";

//Safe async wrapper with error handling

async function runSafeOperation(name, shouldFail) {
  try {
    const result = await simulateApiCall(name, shouldFail);
    return {
      ok: true,
      name: name,
      status: result.status,
      timestamp: Date.now(),
    };
  } catch (error) {
    console.error("Error:", error.message);
    return {
      ok: false,
      name: name,
      error: error.message,
    };
  }
}

//Demonstrate success
runSafeOperation("profile", false).then(function (v) {
  console.log("Success result:", v);
});

//Demonstrate failure
runSafeOperation("report", true).then(function (v) {
  console.log("Failure result:", v);
});

//Export for reuse
export { runSafeOperation };
