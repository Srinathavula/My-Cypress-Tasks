import { BasePage } from '../../utils/BasePage';

class LoginPage extends BasePage {
  // Selectors
  emailInput = 'input[name="email"]:visible';
  passwordInput = 'input[name="password"]:visible';
  loginButton = 'button[type="submit"]:visible';

  // Method to visit login page
  visitLoginPage(baseUrl) {
    this.visit(`${baseUrl}/login`);
  }

  // Enter email
  enterEmail(email) {
    this.typeText(this.emailInput, email);
  }

  // Enter password
  enterPassword(password) {
    this.typeText(this.passwordInput, password);
  }

  // Click login button
  clickLogin() {
    this.clickElement(this.loginButton);
  }

  // Perform login
  login(email, password) {
    this.enterEmail(email);
    this.enterPassword(password);
    this.clickLogin();
  }
}

export default LoginPage;

