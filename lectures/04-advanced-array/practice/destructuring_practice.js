let rawTestData = [
  ["login_functionality", "PASS", 245, "HIGH"],
  ["user_registration", "FAIL", 1200, "HIGH"],
  ["password_reset", "PASS", 800, "MEDIUM"],
  ["profile_update", "PASS", 450, "MEDIUM"],
  ["admin_dashboard", "FAIL", 2100, "LOW"],
  ["logout_process", "PASS", 180, "LOW"],
  ["payment_gateway", "FAIL", 1800, "HIGH"],
  ["data_export", "SKIP", 0, "MEDIUM"],
];

let formattedReports = rawTestData.map((test) => {
  let [testName, testStatus, time, priority] = test;
  let icon = testStatus === "PASS" ? "✅" : testStatus === "FAIL" ? "❌" : "💙";
  return `${icon} ${testName} (${time}ms) - ${priority} priority`;
});

formattedReports.forEach((report) => console.log(report));
console.log("=== RAW TEST DATA LOADED ===");
console.log(`Total test cases: ${rawTestData.length}`);
