import { Page, expect, Locator} from '@playwright/test';
import { CONSTANTS } from '../config/constants';

export class TipTopPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

      
  // Locators
  get disabledInput(): Locator {
    return this.page.locator('//input[@name="my-disabled"]');
  }

  get readonlyInput(): Locator {
    return this.page.locator('//input[@name="my-readonly"]');
  }

  get readonlyInput2(): Locator {
    return this.page.locator('//input[@value="Readonly input"]');
  }

  get dropdown(): Locator {
    return this.page.locator('//select[@name="my-select"]');
  }

  get dropdown2(): Locator {
    return this.page.locator('//select[@class="form-select"]');
  }

  get submitButton(): Locator {
    return this.page.locator('#submit-form');
  }

  get nameInput(): Locator {
    return this.page.locator('#my-name-id');
  }

  get passwordInput(): Locator {
    return this.page.locator('#my-password-id');
  }

  get receivedText(): Locator {
    return this.page.locator('#message');
  }

  // Reusable Methods
  //navigation method and default is Base_URL from constants
  async navigateTo(url: string = CONSTANTS.BASE_URL) {
    if (!(await this.isAtExpectedPage())) {
        await this.page.goto(url); // Navigate only if not already on the expected page
    }  
  }

  // Method to check if the page title matches the expected title
  async isAtExpectedPage(): Promise<boolean> {
    try {
      const h1Element = await this.page.locator('h1.display-6');
      return await h1Element.isVisible();  // Return true if the h1 element is visible
    } catch (error) {
      return false;  // If the h1 element is not found, return false
    }
  }

  //method to verify element visibility
  async verifyElementVisibility(locator: Locator, shouldBeVisible: boolean) {
    if (shouldBeVisible) {
      await expect(locator).toBeVisible();
    } else {
      await expect(locator).not.toBeVisible();
    }
  }

  //method to check the state of the element
  async verifyElementState(locator: Locator, state: 'disabled' | 'readonly' | 'enabled') {
    if (state === 'disabled') {
      await expect(locator).toBeDisabled();
    } else if (state === 'readonly') {
      await expect(locator).toHaveAttribute('readonly', '');
    } else if (state === 'enabled') {
      await expect(locator).toBeEnabled();
    }
  }

  //to verify dropdown count
  async verifyDropdownOptionCount(locator: Locator, expectedCount: number) {
    const options = await locator.locator('option').count();
    expect(options).toBe(expectedCount);
  }

  //to pass input
  async fillInput(locator: Locator, value: string) {
    await locator.fill(value);
  }

  //to check the url values / params
  async verifyDataInURL(param: string, value: string) {
    const encodedValue = encodeURIComponent(value);
    await expect(this.page).toHaveURL(new RegExp(`${param}=${encodedValue}`));
  }
}