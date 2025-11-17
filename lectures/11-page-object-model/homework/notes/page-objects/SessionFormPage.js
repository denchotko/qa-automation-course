export class SessionFormPage {
  constructor(page) {
    this.page = page;
    this.url = new URL(
      "../../../../10-advanced-ui-interactions/homework/pages/registration-form.html",
      import.meta.url
    ).href;

    // Locators
    this.formatDropdown = page.locator("#session-format");
    this.topicCheckbox = (topic) => page.locator(`#topic-${topic}`);
    this.audienceRadio = (level) => page.locator(`#level-${level}`);
    this.codeCheckbox = page.locator("#code-of-conduct");
    this.fileInput = page.locator("#materials");
    this.submitButton = page.locator('button[type="submit"]');
  }

  async navigate() {
    await this.page.goto(this.url);
  }

  async selectFormat(valueOrLabel) {
    if (typeof valueOrLabel === "string") {
      await this.formatDropdown.selectOption({ label: valueOrLabel });
    } else {
      await this.formatDropdown.selectOption(valueOrLabel);
    }
  }

  async setTopics(topics, shouldCheck = true) {
    let allSucceeded = true;

    for (const topic of topics) {
      const checkbox = this.topicCheckbox(topic);

      const isChecked = await checkbox.isChecked();
      if (shouldCheck && !isChecked) {
        await checkbox.check({ force: true });
        if (!(await checkbox.isChecked())) {
          allSucceeded = false;
        }
      } else if (!shouldCheck && isChecked) {
        await checkbox.uncheck({ force: true });
        if (await checkbox.isChecked()) {
          allSucceeded = false;
        }
      }
    }

    return allSucceeded;
  }

  async selectAudience(level) {
    await this.audienceRadio(level).check();
  }

  async uploadFiles(paths) {
    await this.fileInput.setInputFiles(paths);
  }

  async acceptCodeOfConduct() {
    await this.codeCheckbox.check();
  }

  async clickSubmit() {
    await this.submitButton.click();
  }

  async completeSubmission({ format, topics, audience, files }) {
    await this.selectFormat(format);
    await this.setTopics(topics);
    await this.selectAudience(audience);
    await this.acceptCodeOfConduct();
    await this.uploadFiles(files);
    await this.clickSubmit();
  }
}
