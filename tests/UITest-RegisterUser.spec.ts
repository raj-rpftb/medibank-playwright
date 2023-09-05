import { test } from "../src/fixtures/basePage";
import GenData from "../src/utils/genData";

test.describe('UI Test Register User', () => {
  test('Verify Create Account', async ({ homePage, loginPage }) => {

    const genData = new GenData();
    const userInfo = genData.genUserData();

    await test.step('Open Home page', async () => {
      await homePage.gotoHomePage();
    })

    await test.step('Open Login page', async () => {
      await homePage.clickSignUpLoginButton();
    })

    await test.step('Fill Name and Email', async () => {
      await loginPage.signUp(userInfo.name, userInfo.email);
    })

    await test.step('Fill Account Information', async () => {
      await loginPage.fillAccountInformation(userInfo.password, userInfo.day, userInfo.month, userInfo.year, userInfo.firstName, userInfo.lastName, userInfo.address, userInfo.state, userInfo.city, userInfo.zipCode, userInfo.phoneNumber);
    })

    await test.step('Verify Account Created', async () => {
      await loginPage.verifyAccountCreated();
    })

  });
});
