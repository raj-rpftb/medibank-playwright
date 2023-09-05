import { Locator, Page, expect } from "@playwright/test";
import CommonPage from "./CommonPage";

/**
 * LoginPage class extends the CommonPage class.
 * It provides methods to interact with the Login page of the application.
 */
class LoginPage extends CommonPage {
  readonly page: Page;
  readonly nameField: Locator;
  readonly emailField: Locator;
  readonly signUpButton: Locator;
  readonly titleButton: Locator;
  readonly passwordField: Locator;
  readonly dayDropDown: Locator;
  readonly monthDropDown: Locator;
  readonly yearDropDown: Locator;
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly addressField: Locator;
  readonly stateField: Locator;
  readonly cityField: Locator;
  readonly zipCodeField: Locator;
  readonly phoneNumberField: Locator;
  readonly createAccountButton: Locator;
  readonly accountCreatedMessage: Locator;
  readonly loginEmailField: Locator;
  readonly passwordLoginField: Locator;
  readonly loginButton: Locator;
  readonly loginFailMessage: Locator;

  /**
   * LoginPage constructor
   * @param {Page} page - Playwright's Page object
   */
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.nameField = page.locator("input[data-qa='signup-name']")
    this.emailField = page.locator("input[data-qa='signup-email']");
    this.signUpButton = page.getByRole('button', { name: 'Signup' });

    this.titleButton = page.getByLabel('Mr.');
    this.passwordField = page.getByLabel('Password *');
    this.dayDropDown = page.locator('#days');
    this.monthDropDown = page.locator('#months');
    this.yearDropDown = page.locator('#years');

    this.firstNameField = page.getByLabel('First name *');
    this.lastNameField = page.getByLabel('Last name *');
    this.addressField = page.getByLabel('Address * (Street address, P.O. Box, Company name, etc.)');
    this.stateField = page.getByLabel('State *');
    this.cityField = page.getByLabel('City *');
    this.zipCodeField = page.locator('#zipcode');
    this.phoneNumberField = page.getByLabel('Mobile Number *');
    this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
    this.accountCreatedMessage = page.getByText('Account Created!');
    this.loginEmailField = page.locator("input[data-qa='login-email']");
    this.passwordLoginField = page.locator("input[data-qa='login-password']");
    this.loginButton = page.locator("button[data-qa='login-button']");
    this.loginFailMessage = page.locator("p", { hasText: "Your email or password is incorrect!" });
  }

  /**
   * Method to sign up a user
   * @param {string} name - User's name
   * @param {string} email - User's email
   */
  async signUp(name: string, email: string) {
    console.log(email);
    await this.nameField.fill(name);
    await this.emailField.fill(email);
    await this.signUpButton.click();
  }

  /**
   * Method to fill account information
   * @param {string} password - User's password
   * @param {string} day - User's birth day
   * @param {string} month - User's birth month
   * @param {string} year - User's birth year
   * @param {string} firstName - User's first name
   * @param {string} lastName - User's last name
   * @param {string} address - User's address
   * @param {string} state - User's state
   * @param {string} city - User's city
   * @param {string} code - User's zip code
   * @param {string} phone - User's phone number
   */
  async fillAccountInformation(password: string, day: string, month: string, year: string, firstName: string, lastName: string, address: string, state: string, city: string, code: string, phone: string) {
    await this.titleButton.click();
    await this.passwordField.fill(password);
    await this.dayDropDown.selectOption({ label: day });
    await this.monthDropDown.selectOption({ label: month });
    await this.yearDropDown.selectOption({ label: year });
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.addressField.fill(address);
    await this.stateField.fill(state);
    await this.cityField.fill(city);
    await this.zipCodeField.fill(code);
    await this.phoneNumberField.fill(phone);
    await this.createAccountButton.click();
  }

  async verifyAccountCreated() {
    await expect(this.accountCreatedMessage).toBeVisible();
  }

  /**
   * Method to login a user
   * @param {string} email - User's email
   * @param {string} password - User's password
   */
  async login(email: string, password: string) {
    await this.loginEmailField.fill(email);
    await this.passwordLoginField.fill(password);
    await this.loginButton.click();
  }

  async verifyLoginFail() {
    await expect(this.loginFailMessage).toBeVisible();
  }
}

export default LoginPage;

