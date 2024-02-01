import Navbar from '@/cypress/pageObjects/components/Navbar';
import LoginPage from '@/cypress/pageObjects/pages/LoginPage';

describe('Login Failed Test', () => {
    before(function () {
        const url = 'http://zero.webappsecurity.com/index.html';
        cy.visit(url);
        Navbar.clickSignIn();
    });

    it('should try to login with invalid credentials', () => {
        LoginPage.login('invalid username', 'invalid password');
    });

    it('should display error message', () => {
        LoginPage.displayErrorMessage();
    });
});

describe('Login Success Test', () => {
    before(function () {
        const url = 'http://zero.webappsecurity.com/index.html';
        cy.visit(url);
        Navbar.clickSignIn();
    });

    it('should login into application', () => {
        LoginPage.login('username', 'password');
    });

    it('should logout from application', () => {
        Navbar.logout();
        Navbar.displaySignInButton();
    });
});
