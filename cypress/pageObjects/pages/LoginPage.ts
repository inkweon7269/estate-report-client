export default class LoginPage {
    static login(username: string, password: string) {
        cy.login(username, password);
    }

    static clickForgotPasswordLink() {
        cy.contains('Forgot your password ?').click();
    }

    static displayErrorMessage() {
        // cy.get('').should('be.visible')
        cy.isVisible('.alert-error');
    }
}
