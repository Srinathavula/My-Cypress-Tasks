import TextBoxPage from '../../pages/demoqa/TextBoxPage';

describe('DemoQA Text Box - With Given Data', () => {

  const textBox = new TextBoxPage();

  beforeEach(() => {
    textBox.visit();
  });

  it('Submit form with provided valid data', () => {

    cy.fixture('demoqa/textBoxData').then((data) => {

      textBox.fillForm(
        data.validData.fullName,
        data.validData.email,
        data.validData.currentAddress,
        data.validData.permanentAddress
      );
      textBox.clickSubmit();

      // Assertions
      textBox.verifyElementVisible(textBox.outputSection);
      textBox.getOutput().should('contain', 'Dinesh Nayak');
      textBox.getOutput().should('contain', 'revis86613@codgal.com');
      textBox.getOutput().should('contain', 'Near bjp office');
      textBox.getOutput().should('contain', 'Near railway station');
    });

  });

});
