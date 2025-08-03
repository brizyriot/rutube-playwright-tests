import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async closeCookiesAlert() {
    await this.page.getByRole('button', { name: 'Ок' }).click();
  }

  async closePopup() {
    await this.page.getByRole('button', { name: 'Закрыть' }).click();
  }
}
