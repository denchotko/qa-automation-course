export class LoginPage {
  constructor(page) {
    this.page = page;
    // Locators
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator("#login-button");
    this.successMessage = page.locator("#success-message");
    this.errorMessage = page.locator("#error-message");
  }

  // Aliases expected by some tests
  get username() {
    return this.usernameInput;
  }
  get password() {
    return this.passwordInput;
  }
  get submit() {
    return this.loginButton;
  }

  // Navigate to the login page. For local file-based pages we use the relative path from this file,
  // but callers can pass a custom url (for example when using baseURL in config).
  async goto(url = new URL("../pages/login.html", import.meta.url).href) {
    await this.page.goto(url);
  }

  // Fill credentials and submit
  async login(username, password) {
    if (username !== undefined) await this.usernameInput.fill(username);
    if (password !== undefined) await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  // Convenience: perform login and wait for either success or error to appear
  async loginAndWait(
    username,
    password,
    { waitForSuccess = true, timeout = 5000 } = {}
  ) {
    await this.login(username, password);
    if (waitForSuccess) {
      await this.successMessage.waitFor({ state: "visible", timeout });
    } else {
      await this.errorMessage.waitFor({ state: "visible", timeout });
    }
  }

  // Helpers to read messages
  async getSuccessText() {
    return (await this.successMessage.textContent())?.trim() ?? "";
  }

  async getErrorText() {
    return (await this.errorMessage.textContent())?.trim() ?? "";
  }

  async isLoggedIn() {
    return await this.successMessage.isVisible();
  }
}
