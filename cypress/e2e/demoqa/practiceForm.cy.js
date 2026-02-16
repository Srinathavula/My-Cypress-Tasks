describe('DemoQA Practice Form Automation', () => {

  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Fill form and verify submission details', () => {

    // First Name
    cy.get('#firstName').type('Dinesh');

    // Last Name
    cy.get('#lastName').type('Nayak');

    // Email
    cy.get('#userEmail').type('revis86613@codgal.com');

    // Gender
    cy.contains('label', 'Male').click();

    // Mobile Number
    cy.get('#userNumber').type('8186096705');

    // Date of Birth
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('2001');
    cy.get('.react-datepicker__month-select').select('February');
    cy.contains('.react-datepicker__day', '12').click();

    // Subjects
    cy.get('#subjectsInput').type('Computer Science{enter}');

    // Hobbies
    cy.contains('label', 'Sports').click();
    cy.contains('label', 'Reading').click();
    cy.contains('label', 'Music').click();

    // Upload File
    cy.get('#uploadPicture')
      .scrollIntoView()
      .selectFile('C:/Users/avula/OneDrive/Pictures/create visual mindmap.png');

    // Current Address
    cy.get('#currentAddress')
      .type('Near bjp office, kukatpally, 500072');

    // Scroll and Submit
    cy.get('#submit')
      .scrollIntoView()
      .click({ force: true });

    // Validate Modal Appears
    cy.get('.modal-content').should('be.visible');

    // Validate Data in Modal
    cy.get('.table').should('contain', 'Dinesh Nayak');
    cy.get('.table').should('contain', 'revis86613@codgal.com');
    cy.get('.table').should('contain', 'Male');
    cy.get('.table').should('contain', '8186096705');
    cy.get('.table').should('contain', 'Computer Science');
    cy.get('.table').should('contain', 'Sports');
    cy.get('.table').should('contain', 'Reading');
    cy.get('.table').should('contain', 'Music');
    cy.get('.table').should('contain', 'create visual mindmap.png');

  });

});
