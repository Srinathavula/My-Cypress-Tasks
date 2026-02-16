import LoginActions from '../../utils/alison/LoginActions';

describe('Alison Login – Invalid Scenarios', () => {

  const login = new LoginActions();
  let creds;

  before(() => {
    cy.fixture('alison/creds').then((data) => {
      creds = data;
    });
  });

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    login.visitLoginPage();
  });

  function attemptLogin(username, password, screenshotName) {
    login.login(username, password);
    cy.url().should('include', '/login');
    cy.screenshot(screenshotName);
  }

  it('Valid username + Invalid password', () => {
    attemptLogin(
      creds.validUser.username,
      creds.invalidUser.password,
      'Valid_username_Invalid_password_error'
    );
  });

  it('Invalid username + Valid password', () => {
    attemptLogin(
      creds.invalidUser.username,
      creds.validUser.password,
      'Invalid_username_Valid_password_error'
    );
  });

  it('Invalid username + Invalid password', () => {
    attemptLogin(
      creds.invalidUser.username,
      creds.invalidUser.password,
      'Invalid_username_Invalid_password_error'
    );
  });

});
