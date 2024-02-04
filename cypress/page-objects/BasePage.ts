export default class BasePage {
    static displaySuccessMsg() {
        cy.isVisible('.ant-message-custom-content.ant-message-success');
    }

    static displayErrorMsg() {
        cy.isVisible('.ant-message-notice.ant-message-notice-warning');
    }
}
