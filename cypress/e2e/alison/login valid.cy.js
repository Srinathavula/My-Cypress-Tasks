import LoginActions from '../../utils/alison/LoginActions';

describe('Alison Login – Valid User (UI + API + Reports)', () => {

  beforeEach(() => {
    cy.clearSession();
    // Capture all POST calls (login + others)
    cy.intercept('POST', '**').as('loginAPI');
  });

  it('Valid username + Valid password', () => {
    const login = new LoginActions();
    login.visitLoginPage();

    cy.fixture('alison/creds').then((creds) => {
      login.login(
        creds.validUser.username,
        creds.validUser.password
      );
    });

    // API response logs (using cy.log ONLY)
    cy.wait('@loginAPI').then((response) => {
      cy.log('response body:');
      cy.log(JSON.stringify(response.response?.body));

      cy.log('response headers:');
      cy.log(JSON.stringify(response.response?.headers));
    });

    // Frontend validation (safe for Alison)
    cy.url().should('not.include', '/login');
  });

});
