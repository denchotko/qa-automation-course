let executionTimes = [1250, 890, 2100, 456];

let formattedTimes = executionTimes.map(function (time) {
  return time + "ms";
});

console.log("Formatted execution times:", formattedTimes);

let userIds = [101, 102, 103, 104];

let testEmails = userIds.map(function (id) {
  return "testuser" + id + "@example.com";
});

console.log("Generated test emails:", testEmails);
