// Real-world test validation scenarios
function validateSuccessMessage(actualMessage) {
  // Check if message contains all required keywords
  let isNotEmpty = actualMessage.trim().length > 0;
  let hasSuccess = actualMessage.toLowerCase().includes("success");
  let hasUser = actualMessage.toLowerCase().includes("user");

  return isNotEmpty && hasSuccess && hasUser;
}

// Test the validation function
let successMsg = "User registration successful!";
let isValid = validateSuccessMessage(successMsg);
console.log("Message is valid:", isValid); // true

// Extract data from response messages
function extractUserId(responseMessage) {
  let idPosition = responseMessage.indexOf("ID: ");
  if (idPosition !== -1) {
    let idString = responseMessage.slice(idPosition + 4);
    return parseInt(idString);
  }
  return null;
}

const apiResponse = "User created successfully with ID: 12345";
let userId = extractUserId(apiResponse);
console.log("Extracted user ID:", userId); // 12345
