let retryCount = 0;
let maxRetries = 3;
let testPassed = false;

while (retryCount < maxRetries && !testPassed) {
  retryCount++;
  console.log(`Attempt ${retryCount}: Running flaky test,,,`);

  //simulate a test that might pass or fail
  testPassed = retryCount === 2; // true
}

if (testPassed) {
  console.log("Test passed");
} else {
  console.log("test failed, will retry");
}

if (!testPassed) {
  console.log("Test failed after all retries");
}
