// CURA Appointment E2E - Page Object Model
import curaLogin from '../../pages/cura/CuraLoginPage';
import curaAppointment from '../../pages/cura/CuraAppointmentPage';

describe('CURA Healthcare - End-to-End appointment booking and logout', () => {
  before(function () {
    // load test data from fixture
    cy.fixture('cura/curaData.json').then((data) => {
      this.data = data;
    });
  });

  it('should book an appointment and logout successfully', function () {
    // Step 1: Open browser and navigate to the application URL
    cy.visit(this.data.url);

    // Step 2: Click on "Make Appointment"
    curaLogin.clickMakeAppointment();

    // Step 3: Login using valid credentials
    curaLogin.login(this.data.credentials.username, this.data.credentials.password);

    // Step 4: Verify Make Appointment page is displayed
    curaAppointment.verifyMakeAppointmentPage();

    // Step 5: Select Facility
    curaAppointment.selectFacility(this.data.appointment.facility);

    // Step 6: Check "Apply for hospital readmission"
    if (this.data.appointment.applyReadmission) {
      curaAppointment.applyForReadmission(true);
    }

    // Step 7: Select Healthcare Program: Medicare
    curaAppointment.selectProgram(this.data.appointment.program);

    // Step 8: Enter Visit Date
    curaAppointment.enterVisitDate(this.data.appointment.visitDate);

    // Step 9: Enter Comment
    curaAppointment.enterComment(this.data.appointment.comment);

    // Step 10: Click "Book Appointment"
    curaAppointment.clickBook();

    // Step 11: Verify Appointment Confirmation page is displayed
    cy.get('h2').should('contain', 'Appointment Confirmation');

    // Step 12: Verify confirmation details
    curaAppointment.verifyConfirmationDetails(this.data.appointment);

    // Capture a screenshot of the confirmation (saved even on pass)
    cy.screenshot('appointment-booked', { capture: 'viewport' });

    // Step 13: Click "Go to Homepage"
    curaAppointment.clickGoToHomepage();

    // Step 14: Click Menu toggle
    curaAppointment.openMenu();

    // Step 15: Click Logout
    curaAppointment.logout();

    // Step 16: Verify user is logged out and homepage is displayed
    cy.contains('Make Appointment').should('be.visible');
  });
});
