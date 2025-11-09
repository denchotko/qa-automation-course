/**
 * Module-level state variable for connection status.
 * This simulates a private state within a module scope.
 * Task 3: Guaranteed Cleanup with finally
 */

let connected = false;

// --- Connection Management Functions ---

/**
 * Establishes the connection if not already connected.
 */
export function connect() {
  if (connected) {
    console.log("[Info] Already connected.");
    return;
  }
  connected = true;
  console.log("Connected");
}

/**
 * Closes the connection if currently connected.
 */
export function disconnect() {
  if (connected) {
    connected = false;
    console.log("Disconnected");
  } else {
    console.log("[Info] Already disconnected.");
  }
}

// --- Operation Function ---

/**
 * Attempts to run an operation based on configuration.
 */
export function runOperation(config) {
  if (!connected) {
    throw new Error("Not connected");
  }

  if (config.shouldFail) {
    throw new Error(`Operation failed: ${config.name}`);
  }

  return { ok: true, name: config.name };
}

// --- Combined Function with Cleanup ---

/**
 * Connects, attempts an operation, handles failure, and ensures disconnection.
 * This is the main function demonstrating try...catch...finally for cleanup.
 */
export function runWithCleanup(config) {
  // 1. Always attempt to connect
  connect();

  try {
    // 2. Try to run the operation
    const result = runOperation(config);
    return result;
  } catch (error) {
    // 3. Catch error, log message, and return fallback
    console.error(`Error: ${error.message}`);
    return { ok: false };
  } finally {
    // 4. Finally, always disconnect for cleanup
    disconnect();
  }
}

// ======================================================================
// --- Demos and Verification ---
// ======================================================================

const successConfig = { name: "FetchData", shouldFail: false };
const failConfig = { name: "DeleteRecords", shouldFail: true };

// --- 1. Successful Operation Demo ---
console.log("\n--- Running successful operation (FetchData) ---");
const successResult = runWithCleanup(successConfig);
console.log("Operation result:", successResult);
// Logs should show: Connected -> result -> Disconnected

// --- 2. Failing Operation Demo ---
console.log("\n--- Running failing operation (DeleteRecords) ---");
const failResult = runWithCleanup(failConfig);
console.log("Operation result:", failResult);
// Logs should show: Connected -> Error: Operation failed -> Disconnected

// --- 3. Immediate Run Without Cleanup (Throws "Not connected") ---
console.log("\n--- Testing runOperation directly (Error expected) ---");
disconnect(); // Ensure we are disconnected
try {
  runOperation({ name: "DirectTest", shouldFail: false });
} catch (error) {
  console.error(`Error: ${error.message}`);
}
