import LoginPage from '@/cypress/page-objects/pages/LoginPage';
import BasePage from '@/cypress/page-objects/BasePage';

describe('로그인 실패', () => {
    before(() => {
        cy.clearCookies();
        const url = 'http://localhost:3000/';
        cy.visit(url);
    });

    it('로그인 시도', () => {
        LoginPage.login('12@test.com', '1234567');
    });

    it('로그인 실패 안내', () => {
        BasePage.displayErrorMsg();
    });
});

describe('로그인 성공', () => {
    before(() => {
        cy.clearCookies();
        const url = 'http://localhost:3000/';
        cy.visit(url);
    });

    it('로그인 시도', () => {
        cy.fixture('loginData').then((data) => {
            LoginPage.login(data.email, data.password);
        });
    });

    it('로그인 성공 안내', () => {
        BasePage.displaySuccessMsg();
    });
});
