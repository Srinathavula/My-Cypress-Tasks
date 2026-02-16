/**
 * Base Page Object Model Class
 * Provides common functionality for all page objects
 */

export class BasePage {
  constructor() {
    this.defaultTimeout = 10000;
  }

  visit(path) {
    cy.visit(path);
  }

  waitForElement(selector, timeout = this.defaultTimeout) {
    return cy.get(selector, { timeout }).should('be.visible');
  }

  getElement(selector) {
    return cy.get(selector);
  }

  clickElement(selector) {
    this.getElement(selector).click();
  }

  typeText(selector, text) {
    this.getElement(selector).clear().type(text);
  }

  getElementText(selector) {
    return this.getElement(selector).invoke('text');
  }

  verifyElementContains(selector, text) {
    this.getElement(selector).should('contain', text);
  }

  verifyElementVisible(selector) {
    this.getElement(selector).should('be.visible');
  }

  verifyElementHidden(selector) {
    this.getElement(selector).should('not.be.visible');
  }
}

export default BasePage;
