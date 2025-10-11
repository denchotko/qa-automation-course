let browsers = ["Chrome", "Firefox", "Safari", "Edge"];

// Accessing individual elements
console.log("First browser:", browsers[0]); // "Chrome"
console.log("Second browser:", browsers[1]); // "Firefox"
console.log("Last browser:", browsers[3]); // "Edge"

// Using array values in test logic
let currentBrowser = browsers[0];
if (currentBrowser === "Chrome") {
  console.log("Running tests in Chrome browser");
}

// Modifying array elements
browsers[2] = "Safari 14"; // Update Safari version
console.log("Updated browsers:", browsers);
