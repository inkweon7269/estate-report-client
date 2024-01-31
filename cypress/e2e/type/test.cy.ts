describe('App Actions Design Pattern', () => {
    it('Should login into an application', () => {
        cy.visitLoginpage();
        cy.waitForSeconds(5);

        cy.fixture('loginData').then(({ username, password }) => {
            cy.login(username, password);
        });
    });

    it.skip('Should submit feedback form', () => {
        cy.visitFeedbackpage();
        cy.fixture('feedbackData').then(({ name, email, subject, message }) => {
            cy.submitFeedback(name, email, subject, message);
        });
    });
});
