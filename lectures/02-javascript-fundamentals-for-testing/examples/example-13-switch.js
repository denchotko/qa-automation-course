// Switch for different test environments
let environment = "staging";

switch (environment) {
  case "development":
    console.log("Using dev database and relaxed timeouts");
    break;
  case "staging":
    console.log("Using staging environment with production-like data");
    break;
  case "production":
    console.log("Using production environment - be careful!");
    break;
  default:
    console.log("Unknown environment:", environment);
}

// Switch for handling different HTTP status codes
let httpStatus = 404;

switch (httpStatus) {
  case 200:
    console.log("✅ Success - request completed");
    break;
  case 400:
    console.log("❌ Bad Request - check your data");
    break;
  case 401:
    console.log("❌ Unauthorized - check authentication");
    break;
  case 404:
    console.log("❌ Not Found - endpoint doesn't exist");
    break;
  case 500:
    console.log("❌ Server Error - something went wrong on server");
    break;
  default:
    console.log("❌ Unexpected status code:", httpStatus);
}

// Switch for different user roles in testing
let userRole = "admin";

switch (userRole) {
  case "admin":
  case "manager": // Multiple cases can share logic
    console.log("Full access granted");
    break;
  case "user":
    console.log("Standard access granted");
    break;
  case "guest":
    console.log("Limited access granted");
    break;
  default:
    console.log("Access denied - unknown role");
}
