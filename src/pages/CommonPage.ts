import { Locator, Page } from "@playwright/test";

/**
 * CommonPage class.
 * It provides methods to interact with the common elements of the application.
 */
class CommonPage {
  readonly page: Page;
  readonly registerButton: Locator;
  readonly continueButton: Locator;
  readonly productButton: Locator;
  readonly cartButton: Locator;

  /**
   * CommonPage constructor
   * @param {Page} page - Playwright's Page object
   */
  constructor(page: Page) {
    if (!page) {
      throw new Error('Page object is null or undefined');
    }
    this.page = page;
    this.productButton = page.getByRole('link', { name: ' Products' });
    this.cartButton = page.getByRole('link', { name: ' Cart' });
  }

  /**
   * Opens a URL
   * @param {string} url - URL to open
   */
  async openURL(url: string) {
    if (!url) {
      throw new Error('URL is null or undefined');
    }
    try {
      await this.page.goto(url, { timeout: 90 * 1000 });
    } catch (error) {
      console.error(`Failed to open URL: ${error.message}`);
      throw error;
    }
  }

  /**
   * Navigates to the home page
   */
  async gotoHomePage() {
    const url = process.env.QA_SERVER;
    if (!url) {
      throw new Error('QA_SERVER environment variable is not set');
    }
    await this.openURL(url);
  }

  /**
   * Navigates to the product page
   */
  async gotoProductPage() {
    try {
      await this.productButton.click();
    } catch (error) {
      console.error(`Failed to navigate to product page: ${error.message}`);
      throw error;
    }
  }

  /**
   * Navigates to the cart page
   */
  async gotoCartPage() {
    try {
      await this.cartButton.click();
    } catch (error) {
      console.error(`Failed to navigate to cart page: ${error.message}`);
      throw error;
    }
  }
}

export default CommonPage;
