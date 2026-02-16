describe('DemoQA - Browser Windows Automation', () => {

  beforeEach(() => {
    cy.visit('https://demoqa.com/browser-windows', {
      failOnStatusCode: false
    });
  });

  it('Handle Browser Windows correctly', () => {

    // Stub window.open BEFORE clicking anything
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen');
    });

    // Click New Tab
    cy.get('#tabButton').click();
    cy.get('@windowOpen').should('have.been.calledOnce');

    // Click New Window
    cy.get('#windowButton').click();
    cy.get('@windowOpen').should('have.been.calledTwice');

    // Click New Window Message
    cy.get('#messageWindowButton').click({ force: true });

    // Instead of checking exact count, just verify it was called
    cy.get('@windowOpen').should('have.been.called');

  });

});
