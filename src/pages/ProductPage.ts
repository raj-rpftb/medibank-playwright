import { Locator, Page } from "@playwright/test";
import CommonPage from "./CommonPage";

/**
 * ProductPage class extends the CommonPage class.
 * It provides methods to interact with the Product page of the application.
 */
class ProductPage extends CommonPage {
  readonly page: Page;
  readonly searchField: Locator;
  readonly searchButton: Locator;
  readonly addToCartButton: Locator;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.searchField = page.locator("input[id='search_product']");
    this.searchButton = page.locator("button#submit_search");
    this.addToCartButton = page.locator("div.single-products a").first();
    this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping' });

  }

  /**
   * Method to search for a product and add it to the cart
   * @param {string} product - The name of the product to search for
   */
  async searchAndAddProductToCart(product: string) {
    try {
      // Assert product is not null or empty
      if (!product) throw new Error('Product name cannot be null or empty');

      await this.searchField.fill(product);
      await this.searchButton.click();
      await this.addToCartButton.click();
      await this.continueShoppingButton.click();

      // Log the successful addition of product to cart
    } catch (error) {
      // Log the error and rethrow
      console.log(`Failed to add product ${product} to cart: ${error.message}`);
      throw error;
    }
  }
}

export default ProductPage;