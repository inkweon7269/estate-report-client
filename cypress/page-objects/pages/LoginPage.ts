export default class LoginPage {
    static login(email: string, password: string) {
        cy.login(email, password);
    }

    static displaySuccessMessage() {
        cy.isVisible('.ant-message-custom-content.ant-message-success');
    }

    static displayErrorMessage() {
        cy.isVisible('.ant-message-notice.ant-message-notice-warning');
    }
}
