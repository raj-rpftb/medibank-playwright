import { Locator, Page, expect } from "@playwright/test";
import CommonPage from "./CommonPage";

/**
 * CartPage class extends the CommonPage class.
 * It provides methods to interact with the Cart page of the application.
 */
class CartPage extends CommonPage {
  readonly page: Page;
  private readonly productNames: Locator;
  private readonly removeProduct: Locator;

  /**
   * CartPage constructor
   * @param {Page} page - Playwright's Page object
   */
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.productNames = page.locator("td.cart_description a");
    this.removeProduct = page.locator("a.cart_quantity_delete");
  }

  /**
   * Verifies if the product name contains the given string.
   * @param {string} product - The product name to verify.
   * @throws {Error} If the product name does not contain the given string.
   */
  async verifyProductNameContain(product: string) {
    const count = await this.productNames.count();
    if (count === 0) throw new Error('No products found in the cart.');
    for (let i = 0; i < count; i++) {
      const productName = await this.productNames.nth(i).innerText();
      expect(productName.toLowerCase()).toContain(product.toLowerCase());
    }
  }

  /**
   * Verifies if the product name does not contain the given string.
   * @param {string} product - The product name to verify.
   * @throws {Error} If the product name contains the given string.
   */
  async verifyProductNameNotContain(product: string) {
    const count = await this.productNames.count();
    if (count === 0) throw new Error('No products found in the cart.');
    for (let i = 0; i < count; i++) {
      const productName = await this.productNames.nth(i).innerText();
      expect(productName.toLowerCase()).not.toContain(product.toLowerCase());
    }
  }

  /**
   * Removes all products from the cart.
   * @throws {Error} If no products are found to remove.
   */
  async removeAllProducts() {
    const count = await this.removeProduct.count();
    if (count === 0) throw new Error('No products found to remove from the cart.');
    for (let i = 0; i < count; i++) {
      await this.removeProduct.first().click();
      await this.page.waitForTimeout(1000);
    }
  }
}

export default CartPage;