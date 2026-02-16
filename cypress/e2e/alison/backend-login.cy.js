describe("Alison Backend Login via cy.request()", () => {

  it("Login without UI typing", () => {

    cy.loginViaBackend(
      "revis86613@codgal.com",
      "Dinesh@d18"
    );

    // Visit homepage
    cy.visit("https://alison.com/");

    cy.url().should("not.include", "/login");
    cy.get("body").should("not.contain", "Sign In");

  });

});

// describe("Alison Backend Login", () => {

//   it("Login using cy.request()", () => {

//     cy.fixture("creds").then((creds) => {

//       cy.loginViaBackend(
//         creds.validUser.email,
//         creds.validUser.password
//       );

//     });

//     cy.visit("https://alison.com/");

//     cy.url().should("not.include", "/login");
//     cy.get("body").should("not.contain", "Sign In");

//   });

// });
