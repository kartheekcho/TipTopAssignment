import { test } from '@playwright/test';
import { TipTopPage } from '../pages/TipTopPage';
import { CONSTANTS } from '../config/constants';


test.describe.parallel('Tip Top Form Tests', () => {
  let tipTopPage: TipTopPage;

  test.beforeEach(async ({ page }) => {
    tipTopPage = new TipTopPage(page);
    await tipTopPage.navigateTo();
  });

  test('Verify the disabled input field', async () => {
    await tipTopPage.verifyElementState(tipTopPage.disabledInput, 'disabled');
    ;
  });

  test('Verify the readonly input field', async () => {
    await tipTopPage.verifyElementState(tipTopPage.readonlyInput, 'readonly');

  });

  test('Verify the readonly input field using second xpath for readonlyInput', async () => {
    await tipTopPage.verifyElementState(tipTopPage.readonlyInput2, 'readonly');

  });

  test('Verify dropdown has 8 options', async () => {
    await tipTopPage.verifyDropdownOptionCount(tipTopPage.dropdown, 8);

  });

  test('Verify dropdown has 8 options second xpath for dropdown', async () => {
    await tipTopPage.verifyDropdownOptionCount(tipTopPage.dropdown2, 8);

  });

  test('Verify submit button is disabled when Name field is empty', async () => {
    await tipTopPage.verifyElementState(tipTopPage.submitButton, 'disabled');

  });

  test('Verify submit button is enabled when Name and Password are entered', async () => {
    const { NAME, PASSWORD } = CONSTANTS.FORM_TEST_DATA;
    await tipTopPage.fillInput(tipTopPage.nameInput, NAME);
    await tipTopPage.fillInput(tipTopPage.passwordInput, PASSWORD);
    await tipTopPage.verifyElementState(tipTopPage.submitButton, 'enabled');

  });

  test('Verify "Received" text appears after form submission', async () => {
    const { NAME, PASSWORD } = CONSTANTS.FORM_TEST_DATA;
    await tipTopPage.fillInput(tipTopPage.nameInput, NAME);
    await tipTopPage.fillInput(tipTopPage.passwordInput, PASSWORD);
    await tipTopPage.submitButton.click();
    await tipTopPage.verifyElementVisibility(tipTopPage.receivedText, true);

  });

  test('Verify all data is passed to the URL after form submission', async () => {
    const { NAME, PASSWORD } = CONSTANTS.FORM_TEST_DATA;
    await tipTopPage.fillInput(tipTopPage.nameInput, NAME);
    await tipTopPage.fillInput(tipTopPage.passwordInput, PASSWORD);
    await tipTopPage.submitButton.click();
    await tipTopPage.verifyDataInURL('my-name', NAME);
    await tipTopPage.verifyDataInURL('my-password', PASSWORD);
  });
});