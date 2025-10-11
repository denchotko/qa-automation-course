let timeoutSeconds = 30;
let maxRetries = 3;
let expectedItemCount = 5;
let useId = 12345;
let responseTime = 250.75; // milliseconds

console.log(timeoutSeconds, maxRetries, expectedItemCount, useId, responseTime);

//Converting string to numbers (common in web testing)
let userIdFromInput = "123456";
let numericUserId = Number(userIdFromInput);
console.log("Converted ID:", numericUserId);
console.log("Type: ", typeof numericUserId);

//Parsing number from mixed content
// let responseTimeText = "Response: 334ms";
// let timeValue = parseInt(responseTimeText.match(/\d+/)[0]); // Extracts 334
// console.log("Parsed time:", timeValue);

let responseTimeText = "334ms";
let timeValue = parseInt(responseTimeText); // Extracts 334
console.log("Parsed time:", timeValue);
