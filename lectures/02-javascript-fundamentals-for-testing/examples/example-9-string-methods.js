// Test data for string method examples
let errorMessage = "Invalid email address provided";
let userName = "  john.doe@example.com  ";
let pageTitle = "QA Automation Dashboard";
let apiResponse = "User created successfully with ID: 12345";
console.log(apiResponse);

// indexOf - find position of text (returns -1 if not found)
let emailErrorPosition = errorMessage.indexOf("email");
console.log("Email mentioned at position:", emailErrorPosition); // 8
console.log("Contains 'password':", errorMessage.indexOf("password")); // -1 (not found)

// includes - check if text contains substring (returns boolean)
console.log("Error mentions email:", errorMessage.includes("email")); // true
console.log("Error mentions password:", errorMessage.includes("password")); // false

// slice - extract part of string
let domain = userName.slice(userName.indexOf("@")); // Gets "@example.com"
console.log("Domain:", domain);

let firstWord = pageTitle.slice(0, 2); // Gets "QA"
console.log("First word:", firstWord);

// trim - remove whitespace (crucial for form input validation)
let cleanUserName = userName.trim();
console.log("Original:", `"${userName}"`);
console.log("Trimmed:", `"${cleanUserName}"`);

// toLowerCase/toUpperCase - normalize text for comparison
let expectedTitle = "qa automation dashboard";
console.log("Title match:", pageTitle.toLowerCase() === expectedTitle); // true

// split - convert string to array (useful for processing data)
let csvData = "test1,test2,test3,test4";
let testNames = csvData.split(",");
console.log("Test names:", testNames); // ["test1", "test2", "test3", "test4"]

// replace - modify strings (useful for test data preparation)
let templateMessage = "Hello {USERNAME}, welcome to {SITE}";
let personalizedMessage = templateMessage
  .replace("{USERNAME}", "John")
  .replace("{SITE}", "QA Portal");
console.log("Personalized:", personalizedMessage);
