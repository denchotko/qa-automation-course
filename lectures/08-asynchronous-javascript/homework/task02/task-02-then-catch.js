//Lecture 8: Homework Assignment: Asynchronous JavaScript
//Task 02: Promises with .then() and .catch()
//Create a realistic promise-based simulator and handle both success and failure using .then() and .catch().

//Simulates an API call with random delay and optional failure
function simulateApiCall(name, shouldFail) {
  const delayMs = Math.floor(Math.random() * 700) + 800; // 800–1500ms
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (shouldFail) {
        reject(new Error("Request failed:" + name));
      } else {
        resolve({ name: name, status: "OK" });
      }
    }, delayMs);
  });
}

// Success demonstration
simulateApiCall("login", false).then(function (result) {
  console.log("Success:", result.name, result.status);
});

// Error demonstration
simulateApiCall("broken", true).then(function (result) {
    console.log("Unexpected success:", result);
  })
  .catch(function (error) {
    console.error("Error:", error.message);
  });

// Chained transformation demonstration
simulateApiCall("fetchData", false)
  .then(function (result) {
    return { ...result, processed: true };
  })
  .then(function (transformed) {
    console.log("Transformed result:", transformed);
  })
  .catch(function (error) {
    console.error("Error:", error.message);
  });

// Export for reuse
export { simulateApiCall };
