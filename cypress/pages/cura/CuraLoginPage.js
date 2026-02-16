import BasePage from '../../utils/BasePage';

class CuraLoginPage extends BasePage {
  constructor() {
    super();
    this.selectors = {
      makeAppointmentBtn: '#btn-make-appointment',
      usernameInput: '#txt-username',
      passwordInput: '#txt-password',
      loginBtn: '#btn-login'
    };
  }

  // Click the 'Make Appointment' button on the homepage
  clickMakeAppointment() {
    this.waitForElement(this.selectors.makeAppointmentBtn).click();
  }

  // Perform login with provided credentials
  login(username, password) {
    this.waitForElement(this.selectors.usernameInput).clear().type(username);
    this.getElement(this.selectors.passwordInput).clear().type(password);
    this.getElement(this.selectors.loginBtn).click();
  }
}

export default new CuraLoginPage();
