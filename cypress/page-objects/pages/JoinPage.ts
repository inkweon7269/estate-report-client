export default class JoinPage {
    static join(email: string, password: string, passwordChk: string) {
        cy.join(email, password, passwordChk);
    }

    static displayPwErrorMsg() {
        cy.contains('비밀번호와 일치하지 않습니다.').should('be.visible');
    }
}
