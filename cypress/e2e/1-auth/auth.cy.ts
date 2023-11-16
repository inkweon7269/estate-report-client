describe('로그인', () => {
    beforeEach('로그인 시도', () => {
        cy.loginToApplication();
    });

    it('로그인 성공', () => {
        cy.log('보고서 페이지로 이동');
    });

    it.only('보고서 작성과 응답코드', () => {
        cy.intercept('POST', 'http://localhost:8000/v1/report').as('postReport');
        cy.contains('보고서 생성').click();

        const selectOption = (name: string, value: string) => {
            cy.get(`div[name="${name}"]`).click();
            cy.wait(1000);
            cy.contains('.ant-select-item-option-content', value).click();
        };

        const checkRadio = (name: string, value: number) => {
            cy.get(`.ant-radio-group [name="${name}"][value="${value}"]`).check();
            cy.wait(1000);
            cy.get(`.ant-radio-group [name="${name}"][value="${value}"]`).should('be.checked');
        };

        // 서울특별시, 강북구, 미아동, 미아동부센트레빌 선택
        selectOption('a1', '서울특별시');
        selectOption('a2', '강북구');
        selectOption('a3', '미아동');
        selectOption('apartId', '미아동부센트레빌');

        // 라디오 버튼 선택
        const radioData = [
            { name: 'space', value: 10 },
            { name: 'middle', value: 10 },
            { name: 'elementary', value: 10 },
            { name: 'kindergarten', value: 2 },
            { name: 'barrier', value: 1 },
            { name: 'hill', value: 2 },
            { name: 'layout', value: 2 },
            { name: 'distance', value: 2 },
            { name: 'sound', value: 1 },
            { name: 'underground', value: 1 },
            { name: 'parking', value: 2 },
            { name: 'clean', value: 2 },
            { name: 'playground', value: 2 },
            { name: 'store', value: 2 },
            { name: 'atm', value: 1 },
        ];

        radioData.forEach(({ name, value }) => {
            checkRadio(name, value);
        });
        cy.contains('저장').click();

        cy.wait('@postReport').then((xhr: any) => {
            console.log(xhr);
            expect(xhr?.response?.statusCode).to.equal(409);
            expect(xhr?.response?.body.error).to.equal('Conflict');
        });
    });

    /*
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
    */
});
