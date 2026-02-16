import { BasePage } from '../../utils/BasePage';

class PracticeFormPage extends BasePage {
  // Selectors
  firstNameInput = '#firstName';
  lastNameInput = '#lastName';
  emailInput = '#userEmail';
  genderRadio = (gender) => `label:has(input[type="radio"][value="${gender}"])`;
  mobileInput = '#userNumber';
  dateOfBirthInput = '#dateOfBirthInput';
  yearSelect = '.react-datepicker__year-select';
  monthSelect = '.react-datepicker__month-select';
  daySelect = '.react-datepicker__day';
  subjectsInput = '#subjectsInput';
  hobbiesCheckbox = (hobby) => `label:has(input[type="checkbox"][value="${hobby}"])`;
  uploadPicture = '#uploadPicture';
  currentAddressInput = '#currentAddress';
  submitButton = '#submit';
  modalContent = '.modal-content';
  resultTable = '.table';

  // Navigate to page
  visit() {
    this.visit('https://demoqa.com/automation-practice-form');
  }

  // Basic inputs
  enterFirstName(firstName) {
    this.typeText(this.firstNameInput, firstName);
  }

  enterLastName(lastName) {
    this.typeText(this.lastNameInput, lastName);
  }

  enterEmail(email) {
    this.typeText(this.emailInput, email);
  }

  selectGender(gender) {
    this.clickElement(this.genderRadio(gender));
  }

  enterMobileNumber(mobile) {
    this.typeText(this.mobileInput, mobile);
  }

  // Date of birth
  selectDateOfBirth(year, month, day) {
    this.clickElement(this.dateOfBirthInput);
    cy.get(this.yearSelect).select(year);
    cy.get(this.monthSelect).select(month);
    cy.contains(this.daySelect, day).click();
  }

  // Subjects
  selectSubject(subject) {
    this.typeText(this.subjectsInput, `${subject}{enter}`);
  }

  // Hobbies
  selectHobby(hobby) {
    this.clickElement(this.hobbiesCheckbox(hobby));
  }

  // File upload
  uploadFile(filePath) {
    cy.get(this.uploadPicture).selectFile(filePath);
  }

  // Address
  enterCurrentAddress(address) {
    this.typeText(this.currentAddressInput, address);
  }

  // Submit form
  submitForm() {
    cy.get(this.submitButton).scrollIntoView().click({ force: true });
  }

  // Verify submission
  verifyModalVisible() {
    this.verifyElementVisible(this.modalContent);
  }

  verifyResultContains(text) {
    cy.get(this.resultTable).should('contain', text);
  }

  // Complete form fill
  fillCompleteForm(formData) {
    this.enterFirstName(formData.firstName);
    this.enterLastName(formData.lastName);
    this.enterEmail(formData.email);
    this.selectGender(formData.gender);
    this.enterMobileNumber(formData.mobile);
    this.selectDateOfBirth(formData.year, formData.month, formData.day);

    if (formData.subjects) {
      formData.subjects.forEach(subject => this.selectSubject(subject));
    }

    if (formData.hobbies) {
      formData.hobbies.forEach(hobby => this.selectHobby(hobby));
    }

    if (formData.filePath) {
      this.uploadFile(formData.filePath);
    }

    this.enterCurrentAddress(formData.address);
    this.submitForm();
  }
}

export default PracticeFormPage;
