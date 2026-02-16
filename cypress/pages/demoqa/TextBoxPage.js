import { BasePage } from '../../utils/BasePage';

class TextBoxPage extends BasePage {
  // Selectors
  fullNameInput = '#userName';
  emailInput = '#userEmail';
  currentAddressInput = '#currentAddress';
  permanentAddressInput = '#permanentAddress';
  submitButton = '#submit';
  outputSection = '#output';

  // Visit TextBox page
  visit() {
    super.visit('https://demoqa.com/text-box');
  }

  // Enter full name
  enterFullName(name) {
    this.typeText(this.fullNameInput, name);
  }

  // Enter email
  enterEmail(email) {
    this.typeText(this.emailInput, email);
  }

  // Enter current address
  enterCurrentAddress(address) {
    this.typeText(this.currentAddressInput, address);
  }

  // Enter permanent address
  enterPermanentAddress(address) {
    this.typeText(this.permanentAddressInput, address);
  }

  // Click submit button
  clickSubmit() {
    this.clickElement(this.submitButton);
  }

  // Get output section
  getOutput() {
    return this.getElement(this.outputSection);
  }

  // Fill form with data
  fillForm(fullName, email, currentAddress, permanentAddress) {
    this.enterFullName(fullName);
    this.enterEmail(email);
    this.enterCurrentAddress(currentAddress);
    this.enterPermanentAddress(permanentAddress);
  }
}

export default TextBoxPage;
