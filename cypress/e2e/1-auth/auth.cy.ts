describe('회원가입과 로그인', () => {
    it('회원가입', () => {
        // 회원가입
        cy.visit('/join');
        cy.log('회원가입');
        cy.get('h2').should('exist').should('have.text', '회원가입');
        cy.get('input[name="email"]').type('in11@test.com');
        cy.get('input[name="password"]').type('xptmxm1!');
        cy.get('input[name="passwordChk"]').type('xptmxm1!');
        cy.contains('button', '회원가입').click();
    });

    it('로그인', () => {
        // 로그인
        cy.visit('/login');
        cy.log('로그인');
        cy.get('h2').should('exist').should('have.text', '로그인');
        cy.get('input[name="email"]').type('in11@test.com');
        cy.get('input[name="password"]').type('xptmxm1!');
        cy.contains('button', '로그인').click();
    });
});
