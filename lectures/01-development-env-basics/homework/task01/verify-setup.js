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
  console.log("=== Environment Information ===");

  const nodeVersion = checkNodeVersion();
  const npmVersion = checkNpmVersion();
  const osPlatform = process.platform;
  const currentDirectory = process.cwd();

  console.log("Operating System:", osPlatform);
  console.log("Current Working Directory:", currentDirectory);

  return {
    nodeVersion,
    npmVersion,
    osPlatform,
    currentDirectory,
  };
}
displayEnvironmentInfo();
