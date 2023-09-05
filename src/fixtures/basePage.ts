import { test as base } from "@playwright/test"
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";

/**
 * This is the base test setup. It extends the base test from playwright and adds
 * the homePage, loginPage, productPage, and cartPage for use in the tests.
 * Each page is setup and torn down for each test.
 */
export const test = base.extend<{ homePage: HomePage, loginPage: LoginPage, productPage: ProductPage, cartPage: CartPage }>({
	homePage: async ({ page }, use) => {
		try {
			const homePage = new HomePage(page);
			await use(homePage);
		} catch (error) {
			console.error(`Failed to setup HomePage: ${error.message}`);
			throw error;
		}
	},

	loginPage: async ({ page }, use) => {
		try {
			const loginPage = new LoginPage(page);
			await use(loginPage);
		} catch (error) {
			console.error(`Failed to setup LoginPage: ${error.message}`);
			throw error;
		}
	},

	productPage: async ({ page }, use) => {
		try {
			const productPage = new ProductPage(page);
			await use(productPage);
		} catch (error) {
			console.error(`Failed to setup ProductPage: ${error.message}`);
			throw error;
		}
	},

	cartPage: async ({ page }, use) => {
		try {
			const cartPage = new CartPage(page);
			await use(cartPage);
		} catch (error) {
			console.error(`Failed to setup CartPage: ${error.message}`);
			throw error;
		}
	},
})