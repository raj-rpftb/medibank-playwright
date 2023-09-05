import { Locator, Page, expect } from "@playwright/test";
import CommonPage from "./CommonPage";

/**
 * HomePage class extends the CommonPage class.
 * It provides methods to interact with the Home page of the application.
 */
class HomePage extends CommonPage {
  readonly page: Page;
  readonly signUpLoginButton: Locator;
  readonly logOutButton: Locator;

  /**
   * HomePage constructor
   * @param {Page} page - Playwright's Page object
   */
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.signUpLoginButton = page.getByRole('link', { name: ' Signup / Login' });
    this.logOutButton = page.getByRole('link', { name: ' Logout' });

  }

  /**
   * Clicks on the Sign Up/Login button
   * @throws {Error} If the button click fails
   */
  async clickSignUpLoginButton() {
    await this.signUpLoginButton.click();
  }

  /**
   * Verifies if the login was successful by checking the visibility of the Logout button
   * @throws {Error} If the Logout button is not visible
   */
  async verifyLoginSuccessFull() {
    try {
      await expect(this.logOutButton).toBeVisible();
    } catch (error) {
      throw new Error(`Login verification failed: ${error.message}`);
    }
  }
}

export default HomePage;