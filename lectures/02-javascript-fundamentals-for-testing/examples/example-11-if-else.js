// Basic if/else for test validation
let actualStatusCode = 200;
let expectedStatusCode = 200;

if (actualStatusCode === expectedStatusCode) {
  console.log("✅ API test passed");
} else {
  console.log("❌ API test failed");
}

// Multiple conditions for comprehensive testing
let responseTime = 300;
let statusCode = 200;
let hasData = true;

if (statusCode === 200 && responseTime < 500 && hasData) {
  console.log("✅ All API checks passed");
} else if (statusCode !== 200) {
  console.log("❌ Wrong status code:", statusCode);
} else if (responseTime >= 500) {
  console.log("❌ Response too slow:", responseTime + "ms");
} else if (!hasData) {
  console.log("❌ Response missing data");
} else {
  console.log("❌ Unknown API failure");
}
