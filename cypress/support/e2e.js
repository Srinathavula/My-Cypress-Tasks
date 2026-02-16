/**
 * Cypress Support File - e2e.js
 * Loaded before each test suite
 */

import 'cypress-mochawesome-reporter/register';
import './commands';

// Global error handling - ignore uncaught exceptions
Cypress.on('uncaught:exception', () => false);

// Before each test
beforeEach(() => {
  // Clear cookies and local storage
  cy.clearAllCookies();
  cy.clearAllLocalStorage();
});

