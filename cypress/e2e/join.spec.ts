import JoinPage from '@/cypress/page-objects/pages/JoinPage';
import BasePage from '@/cypress/page-objects/BasePage';
import LoginPage from '@/cypress/page-objects/pages/LoginPage';
import { generateRandomEmail } from '@/utils/common';

describe('회원가입 실패 - 존재하는 이메일', () => {
    before(() => {
        cy.clearCookies();
        const url = 'http://localhost:3000/join';
        cy.visit(url);
    });

    it('회원가입 시도', () => {
        cy.fixture('loginData').then((data) => {
            JoinPage.join(data.email, data.password, data.password);
        });
    });

    it('회원가입 실패 안내', () => {
        BasePage.displayErrorMsg();
    });
});

describe('회원가입 실패 - 비밀번호가 다른 경우', () => {
    before(() => {
        cy.clearCookies();
        const url = 'http://localhost:3000/join';
        cy.visit(url);
    });

    it('회원가입 시도', () => {
        cy.fixture('loginData').then((data) => {
            JoinPage.join(data.email, data.password, '1234567890');
        });
    });

    it('회원가입 비밀번호 오류', () => {
        JoinPage.displayPwErrorMsg();
    });
});

describe('회원가입 성공', () => {
    const randomEmail = generateRandomEmail();

    before(() => {
        cy.clearCookies();
        const url = 'http://localhost:3000/join';
        cy.visit(url);
    });

    it('회원가입 성공', () => {
        cy.fixture('loginData').then((data) => {
            JoinPage.join(randomEmail, data.password, data.password);
        });
    });

    it('회원가입 성공 안내', () => {
        BasePage.displaySuccessMsg();
    });

    it('회원가입 계정으로 로그인 시도', () => {
        cy.url().should('eq', 'http://localhost:3000/');
        cy.fixture('loginData').then((data) => {
            LoginPage.login(randomEmail, data.password);
        });
    });

    it('로그인 성공 안내', () => {
        BasePage.displaySuccessMsg();
    });
});
