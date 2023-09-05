import { test } from "../src/fixtures/basePage";
import { Constant } from "../src/utils/constants";

test.describe('UI Test Login User', () => {
  test('Verify Login User', async ({ homePage, loginPage }) => {

    const constant = new Constant();


    await test.step('Open Home page', async () => {
      await homePage.gotoHomePage();
    })

    await test.step('Open Login page', async () => {
      await homePage.clickSignUpLoginButton();
    })

    await test.step('Login with invalid account', async () => {
      await loginPage.login(constant.userName, constant.invalid_password);
    })

    await test.step('Verify Login Fail', async () => {
      await loginPage.verifyLoginFail();
    })

    await test.step('Login with valid account', async () => {
      await loginPage.login(constant.userName, constant.password);
    })

    await test.step('Verify Login Successful', async () => {
      await homePage.verifyLoginSuccessFull();
    })

  });
});
