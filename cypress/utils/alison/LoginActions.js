import LoginPage from '../../pages/alison/LoginPage';
import config from '../config';

class LoginActions {
  constructor() {
    this.loginPage = new LoginPage();
  }

  visitLoginPage() {
    const alisonConfig = config.getAlisonConfig();
    this.loginPage.visitLoginPage(alisonConfig.baseUrl);
  }

  login(username, password) {
    this.loginPage.login(username, password);
  }

  loginWithFixture(fixture) {
    this.visitLoginPage();
    cy.fixture(fixture).then((creds) => {
      this.login(creds.validUser.username, creds.validUser.password);
    });
  }
}

export default LoginActions;
