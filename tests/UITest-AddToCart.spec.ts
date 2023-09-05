import { test } from "../src/fixtures/basePage";
import { Constant } from "../src/utils/constants";
import * as ProductData from "../src/testData/product.json"

test.describe('UI Test - Add to Cart', () => {
  test('UI Test - Add to Cart', async ({ homePage, loginPage, productPage, cartPage }) => {

    const constant = new Constant();
    const productData = ProductData.product;

    await test.step('Open Home page', async () => {
      await homePage.gotoHomePage();
    })

    await test.step('Open Login page', async () => {
      await homePage.clickSignUpLoginButton();
    })

    await test.step('Login with valid account', async () => {
      await loginPage.login(constant.userName, constant.password);
    })

    await test.step('Verify Login Successful', async () => {
      await homePage.verifyLoginSuccessFull();
    })

    await test.step('Go To Product Page', async () => {
      await homePage.gotoProductPage();
    })

    await test.step('Add Product To Card', async () => {
      for (const data of productData) {
        await productPage.searchAndAddProductToCart(data.name);
      }
    })

    await test.step('Go To Cart Page', async () => {
      await productPage.gotoCartPage();
    })

    await test.step('Verify All Product Contain Blue', async () => {
      await cartPage.verifyProductNameContain("Blue");
    })

    await test.step('Verify All Product Not Contain Yellow', async () => {
      await cartPage.verifyProductNameNotContain("Yellow");
    })

    await test.step('Remove All Product In Cart', async () => {
      await cartPage.removeAllProducts();
    })

  });
});
