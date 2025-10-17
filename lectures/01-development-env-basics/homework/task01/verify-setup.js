function checkNodeVersion() {
  const version = process.version;
  console.log("Node.js version:", version);
  return version;
}
checkNodeVersion();

function checkNpmVersion() {
  const version = process.env.npm_version || "Not available";
  console.log("NPM version (from env):", version);
  return version;
}
checkNpmVersion();

function displayEnvironmentInfo() {
  console.log("--- Environment Verification ---");

  checkNodeVersion();
  checkNpmVersion();

  const platform = process.platform;
  console.log("Operating System:", platform);

  const currentDirectory = process.cwd();
  console.log("Current working directory:", currentDirectory);

  console.log("------------------------------");
}

// Execute the main function to display environment information.
// displayEnvironmentInfo();

export { displayEnvironmentInfo };
