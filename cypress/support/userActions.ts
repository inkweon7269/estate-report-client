declare namespace Cypress {
    interface Chainable {
        /**
         *
         * @param email
         * @param password
         */
        login(email: string, password: string): Chainable<Element>;

        join(email: string, password: string, passwordChk: string): Chainable<Element>;
    }
}

Cypress.Commands.add('login', (email, password) => {
    cy.get(".ant-input[name='email']").type(email);
    cy.get(".ant-input[name='password']").type(password);
    cy.get('.ant-btn[type=submit]').click();
});

Cypress.Commands.add('join', (email, password, passwordChk) => {
    cy.get(".ant-input[name='email']").type(email);
    cy.get(".ant-input[name='password']").type(password);
    cy.get(".ant-input[name='passwordChk']").type(passwordChk);
    cy.get('.ant-btn[type=submit]').click();
});
