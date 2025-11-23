export class SessionConfirmationPage {
  constructor(page) {
    this.page = page;
    this.url = new URL(
      "../../../../10-advanced-ui-interactions/homework/pages/session-confirmation.html",
      import.meta.url
    ).href;

    this.successMessage = page.locator("h1");
    this.formatSummary = page.locator("#confirm-format");
    this.topicsSummary = page.locator("#confirm-topics");
    this.audienceSummary = page.locator("#confirm-level");
    this.filesSummary = page.locator("#confirm-files");
  }

  getFormatSummary() {
    return this.formatSummary;
  }

  getTopicsSummary() {
    return this.topicsSummary;
  }

  getAudienceSummary() {
    return this.audienceSummary;
  }

  getFilesSummary() {
    return this.filesSummary;
  }
  selectedFormat(value) {
    return this.page.locator(`#confirm-format:has-text("${value}")`);
  }

  selectedTopic(value) {
    return this.page.locator(`#confirm-topics:has-text("${value}")`);
  }

  selectedAudience(value) {
    return this.page.locator(`#confirm-level:has-text("${value}")`);
  }

  uploadedFile(filename) {
    return this.page.locator(`#confirm-files:has-text("${filename}")`);
  }
}
