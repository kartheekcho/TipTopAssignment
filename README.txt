
# TipTop Form Test Automation

## Overview
This project automates the testing of a web form using Playwright in TypeScript. It includes tests to verify the functionality of various elements such as input fields, buttons, and the form submission process. The tests are implemented in a reusable, parameterized manner to allow for flexibility and scalability in future automation tasks.

## Project Structure
- **config/**: Contains configuration files such as constants and other reusable variables.
- **pages/**: Contains Page Object Model (POM) classes representing various web pages in the application.
- **tests/**: Contains the test scripts that are executed by Playwright.
- **tiptop.spec.ts**: The main test file where different test cases are defined.
- **constants.ts**: Contains constants used across the test scripts such as expected dropdown values, test data, and URLs.

## Key Concepts
### Page Object Model (POM)
This is used to encapsulate the functionality of the web page and its elements, making the tests more maintainable and reusable. Each element on the page is represented as a locator and methods are defined to interact with those elements.

### Reusable Test Methods
Methods like `verifyElementState()`, `verifyElementVisibility()`, and `verifyDataInURL()` are designed to handle common actions across various elements, which allows reusability in multiple test cases.

### Test Data Driven Approach
Test data (such as form inputs) are passed into the methods as parameters to make the tests more flexible. This allows you to easily reuse methods for different scenarios.

## Requirements
- Node.js
- Playwright
- TypeScript

## Setup Instructions

### 1. Install Dependencies
First, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/kartheekcho/TipTopAssignment.git
cd <project-directory>
npm install
```

### 2. Run Tests
To run the tests, use the following command:

```bash
npx playwright test
```

### 3. Customize Configuration
You can modify the constants in `config/constants.ts` to adjust for different URLs, test data, or expected values.

## Test Cases
1. **Verify the disabled input field**: Checks if the input field with the name `my-disabled` is disabled.
2. **Verify the readonly input field**: Verifies that the input field with the name `my-readonly` has the `readonly` attribute.
3. **Verify the dropdown has 8 options**: Validates that the dropdown has exactly 8 options.
4. **Verify submit button is disabled when Name field is empty**: Ensures that the submit button is disabled when the Name field is not filled.
5. **Verify submit button is enabled when Name and Password are entered**: Confirms that the submit button becomes enabled when both Name and Password fields are filled.
6. **Verify "Received" text appears after form submission**: Ensures that the "Received" text appears after submitting the form.
7. **Verify all data is passed to the URL after form submission**: Verifies that the data entered into the form appears in the URL query parameters.

## Notes
- The tests utilize Playwright's built-in assertions to verify element states, visibility, and URL parameters.
- Tests can be extended or modified as needed to fit future requirements.


---

For further inquiries, please reach out to the project maintainer.
