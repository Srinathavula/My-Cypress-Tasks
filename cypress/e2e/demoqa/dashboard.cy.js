describe('DemoQA Dashboard Verification', () => {

  it('Should open dashboard successfully', () => {
    cy.visit('https://demoqa.com/');

    cy.url().should('include', 'demoqa.com');
    cy.get('body').should('be.visible');

  });

});
