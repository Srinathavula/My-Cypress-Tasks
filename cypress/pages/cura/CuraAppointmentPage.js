import BasePage from '../../utils/BasePage';

class CuraAppointmentPage extends BasePage {
  constructor() {
    super();
    this.selectors = {
      facilitySelect: '#combo_facility',
      readmissionCheckbox: '#chk_hospotal_readmission',
      // radio input uses name 'programs' and values like 'Medicare'
      programRadio: 'input[name="programs"][value="Medicare"]',
      visitDateInput: '#txt_visit_date',
      commentInput: '#txt_comment',
      bookButton: '#btn-book-appointment',
      confirmationHeader: 'h2',
      goHomeBtn: 'a.btn' // 'Go to Homepage' is a link styled as a button
    };
  }

  // Verify Make Appointment page is displayed
  verifyMakeAppointmentPage() {
    this.verifyElementVisible('h2');
    this.getElement('h2').should('contain', 'Make Appointment');
  }

  selectFacility(facility) {
    this.waitForElement(this.selectors.facilitySelect).select(facility);
  }

  applyForReadmission(shouldApply = true) {
    const chk = this.getElement(this.selectors.readmissionCheckbox);
    if (shouldApply) chk.check(); else chk.uncheck();
  }

  selectProgram(program = 'Medicare') {
    this.getElement(`input[name="programs"][value="${program}"]`).check();
  }

  enterVisitDate(date) {
    // set the date value directly to avoid opening the datepicker overlay
    this.getElement(this.selectors.visitDateInput).invoke('val', date).trigger('change');
  }

  enterComment(text) {
    // Ensure any overlay is closed; use force typing if still covered
    cy.get('body').click(0, 0);
    this.getElement(this.selectors.commentInput).clear().type(text, { force: true });
  }

  clickBook() {
    this.getElement(this.selectors.bookButton).click();
  }

  // Verify confirmation page contains expected details
  verifyConfirmationDetails(expected) {
    cy.contains(expected.facility).should('be.visible');
    cy.contains(expected.applyReadmission ? 'Yes' : 'No').should('be.visible');
    cy.contains(expected.program).should('be.visible');
    cy.contains(expected.visitDate).should('be.visible');
    cy.contains(expected.comment).should('be.visible');
  }

  clickGoToHomepage() {
    cy.contains('Go to Homepage').click();
  }

  openMenu() {
    // try a few possible menu toggle selectors
    cy.get('#menu-toggle, .navbar-toggler, a[href="#menu-toggle"]').first().click({ force: true });
  }

  logout() {
    cy.contains('Logout').click();
  }
}

export default new CuraAppointmentPage();
