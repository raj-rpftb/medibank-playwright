# Playwright - Page object model

## Setup

- Install [nodejs](https://nodejs.org/en/)
- Clone source code
- Install dependencies `npm install`
- Install supported browsers `npx playwright`

## Running tests ([docs](https://playwright.dev/docs/running-tests))

- Running all tests `npx playwright test`
- Running a single test file `npx playwright test login.spec.ts`
  - or without the filename suffix `npx playwright test login`
- Common flags:
  - debug mode `--debug`
  - run with specific browser profile `--project=chromium`

## View report

To open last report run: `npx playwright show-report`

## Additions

- [Playwright](https://github.com/microsoft/playwright) github repository.

- Recommend to install `Playwright Test for VSCode` [extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright).

