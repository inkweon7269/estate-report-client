export default class LoginPage {
    static login(email: string, password: string) {
        cy.login(email, password);
    }
}
