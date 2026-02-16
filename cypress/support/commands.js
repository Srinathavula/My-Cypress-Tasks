/**
 * Custom Cypress Commands
 * Reusable commands across all test suites
 */

/**
 * Clear browser session (cookies, storage, etc.)
 */
Cypress.Commands.add('clearSession', () => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.window().then((win) => {
    win.sessionStorage.clear();
  });
});

/**
 * Login via backend API for Alison
 * @param {string} email - User email
 * @param {string} password - User password
 */
Cypress.Commands.add('loginViaBackend', (email, password) => {
  return cy.request({
    method: 'GET',
    url: 'https://alison.com/login'
  }).then((response) => {
    const csrfToken = response.body.match(
      /<meta name="csrf-token" content="(.*?)"/
    )[1];

    return cy.request({
      method: 'POST',
      url: 'https://alison.com/login',
      form: true,
      headers: {
        'x-csrf-token': csrfToken
      },
      body: {
        email,
        password,
        _token: csrfToken
      },
      failOnStatusCode: false
    });
  }).then((loginResponse) => {
    cy.log('Login Status: ' + loginResponse.status);
    cy.log('Response Body: ' + JSON.stringify(loginResponse.body));
  });
});

/**
 * Handle cookie consent banner
 */
Cypress.Commands.add('handleCookieConsent', () => {
  cy.get('body').then(($body) => {
    if ($body.find('[class*="cookie"], [class*="consent"]').length > 0) {
      cy.get('[class*="cookie"], [class*="consent"]')
        .find('button')
        .first()
        .click({ force: true });
    }
  });
});

/**
 * Wait for element and verify it's visible
 * @param {string} selector - CSS selector
 */
Cypress.Commands.add('waitForElementVisible', (selector) => {
  cy.get(selector, { timeout: 10000 }).should('be.visible');
});

/**
 * Type text with clear
 * @param {string} selector - CSS selector
 * @param {string} text - Text to type
 */
Cypress.Commands.add('typeWithClear', (selector, text) => {
  cy.get(selector).clear().type(text);
});

/**
 * Custom screenshot on test failure
 */
Cypress.Commands.add('screenshotOnFailure', function() {
  if (this.currentTest.state === 'failed') {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    cy.screenshot(`${this.currentTest.title}-failed-${timestamp}`);
  }
});

