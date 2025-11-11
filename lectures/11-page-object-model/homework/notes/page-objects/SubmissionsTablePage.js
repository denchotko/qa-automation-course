export class SubmissionsTablePage {
  constructor(page) {
    this.page = page;
    this.url = new URL(
      "../../../../10-advanced-ui-interactions/homework/pages/table-page.html",
      import.meta.url
    ).href;

    this.table = page.locator("table");
    this.headers = page.locator("thead th");
    this.rows = page.locator("tbody tr");
    this.totalCount = page.locator("#total-count");
  }

  async navigate() {
    await this.page.goto(this.url);
  }

  getRowBySpeaker(name) {
    return this.rows.filter({
      has: this.page.locator(`td:has-text("${name}")`),
    });
  }

  async getHeaders() {
    return await this.headers.allTextContents();
  }

  async getTotalCount() {
    const text = await this.totalCount.textContent();
    return parseInt(text, 10);
  }

  async approve(name) {
    const row = this.getRowBySpeaker(name);
    await row.locator('button:has-text("Delete")').click(); //// NOTE: "Delete" button triggers approval dialog due to script.js logic
  }

  async decline(name) {
    const row = this.getRowBySpeaker(name);
    await row.locator('button:has-text("Decline")').click();
  }

  getStatus(name) {
    return this.getRowBySpeaker(name).locator('td[data-label="Status"]');
  }
}
