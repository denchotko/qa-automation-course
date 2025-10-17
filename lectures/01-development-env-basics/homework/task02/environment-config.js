const defaultEnvironmentConfig = {
  baseUrl: "https://demo-qa-site.com/developement",
  timeout: 15000,
  debugMode: true,
};

function loadEnvironmentConfig() {
  console.log("Loading default environment configuration is loaded");
  console.log("Confirmation:", defaultEnvironmentConfig);
  return defaultEnvironmentConfig;
}

loadEnvironmentConfig();
