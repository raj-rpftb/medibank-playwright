import { APIRequestContext, expect, test } from '@playwright/test';
// Importing test data for product list and search product
import productListTestData from "../src/testData/productListResponse.json";
import searchProductTestData from "../src/testData/productSearchResponse.json"

// Describing the test suite for API Testing
test.describe('API Testing', () => {
  let apiContext: APIRequestContext;

  // Setup method to initialize API context before all tests
  test.beforeAll(async ({ playwright }) => {
    try {
      apiContext = await playwright.request.newContext();
    } catch (error) {
      console.error('Error in setting up API context: ', error);
    }
  })

  // Teardown method to dispose API context after all tests
  test.afterAll(async () => {
    try {
      await apiContext.dispose();
    } catch (error) {
      console.error('Error in disposing API context: ', error);
    }
  });

  // Test to verify 'Get All Product' API
  test('Verify Get All Product API', async ({ request }) => {
    try {
      const product = await request.get(process.env.API_PRODUCT_LIST, {
        headers: {
        }
      });
      // Asserting the status and response of the API
      expect(product.status()).toEqual(200);
      expect(await product.json()).toEqual(productListTestData);
    } catch (error) {
      console.error('Error in Verify Get All Product API test: ', error);
    }
  });

  // Test to verify 'Search Product' API
  test('Verify Search Product', async ({ request }) => {
    try {
      const search = await request.post(process.env.API_SEARCH_PRODUCT, {
        headers: {
        },
        form: { "search_product": "blue" },
      });
      // Asserting the status and response of the API
      expect(search.status()).toEqual(200);
      expect(await search.json()).toEqual(searchProductTestData);
    } catch (error) {
      console.error('Error in Verify Search Product API test: ', error);
    }
  });

});