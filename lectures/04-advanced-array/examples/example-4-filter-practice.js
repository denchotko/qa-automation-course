let testNames = [
  "user_login",
  "admin_login",
  "password_reset",
  "user_logout",
  "asmin_delete",
];

let adminTests = testNames.filter(function (testName) {
  return testName.includes("admin");
});

let loginTests = testNames.filter(function (testName) {
  return testName.includes("login");
});

console.log("Admin tests:", adminTests);
console.log("Login tests:", loginTests);

let emailList = [
  "uesr@test.com",
  "invalid-email",
  "admin@company.com",
  "",
  "another@valid.org",
];

let validEmail = emailList.filter(function (email) {
  return email.includes("@") && email.includes(".") && email.length > 0;
});

console.log("All emails:", emailList);
console.log("Valid emails", validEmail);
