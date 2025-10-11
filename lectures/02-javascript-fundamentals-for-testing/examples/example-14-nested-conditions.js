// Complex validation scenario
let userType = "premium";
let subscriptionActive = true;
let featureEnabled = true;

if (userType === "premium") {
  if (subscriptionActive) {
    if (featureEnabled) {
      console.log("✅ Premium user can access advanced features");
    } else {
      console.log("❌ Feature is disabled for maintenance");
    }
  } else {
    console.log("❌ Premium subscription has expired");
  }
} else if (userType === "basic") {
  if (subscriptionActive) {
    console.log("✅ Basic user has standard access");
  } else {
    console.log("❌ Please renew your subscription");
  }
} else {
  console.log("❌ Unknown user type");
}

// Better approach: breaking down complex logic
function canAccessFeature(userType, subscriptionActive, featureEnabled) {
  if (userType !== "premium" && userType !== "basic") {
    return "Unknown user type";
  }

  if (!subscriptionActive) {
    return "Subscription required";
  }

  if (userType === "premium" && !featureEnabled) {
    return "Feature temporarily disabled";
  }

  return userType === "premium"
    ? "Full access granted"
    : "Basic access granted";
}

// Test the function
let accessResult = canAccessFeature("premium", true, true);
console.log("Access check:", accessResult);
