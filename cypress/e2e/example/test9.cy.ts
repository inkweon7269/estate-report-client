describe('Cypress Etc.', () => {
    it.skip('Mouse Hover', () => {
        // viewport : https://docs.cypress.io/api/commands/viewport
        // cy.viewport(600, 600);
        cy.viewport('macbook-15');

        cy.visit('https://practice-automation.com/hover/');
        cy.get('#mouse_over').trigger('mouseover');
        cy.get('#mouse_over').should('contain', 'You did it!');
    });

    // screenshots 폴더 안에 이미지 저장
    // 전체 스크린샷
    it.skip('Screenshot', () => {
        cy.visit('https://example.com');
        cy.screenshot({ overwrite: true });
    });

    // 특정부분 스크린샷
    it.skip('Single element screenshot', () => {
        cy.visit('https://example.com');
        cy.get('h1').screenshot({ overwrite: true });
    });

    // 파일 생성 및 읽기
    it.skip('Read/Write into JSON file', () => {
        cy.writeFile('test-data/data.json', { name: 'Peter', email: 'in@example.com' });
        cy.readFile('test-data/data.json').then((user) => {
            expect(user.name).to.equal('Peter');
            expect(user.email).to.equal('in@example.com');
        });
    });

    // 스크롤
    it.skip('Scroll into footer view', () => {
        cy.visit('https://practice-automation.com/');
        cy.get('footer').scrollIntoView();
    });

    // 파일 업로드
    it.skip('Upload File', () => {
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').selectFile('cypress/fixtures/example.json');
        cy.get('#file-submit').click();

        cy.get('h3').should('be.visible');
    });

    // Type & Clear
    it.skip('Type and Clear', () => {
        cy.visit('https://practice-automation.com/form-fields/');
        cy.get('#feedbackForm #name').type('12345');
        cy.wait(2000);
        cy.get('#feedbackForm #name').clear().type('new Text');
    });

    // Invoke : 래핑된 객체에서 특정 함수를 호출한다.
    it.skip('Invoke calculation of numbers', () => {
        const fn = (a: number, b: number, c: number) => {
            return a + b + c;
        };

        cy.wrap({ sum: fn }).invoke('sum', 2, 5, 10).should('be.greaterThan', 10).and('be.lessThan', 20);
    });

    // 테이블 제어
    it('Data Tables', { retries: 3 }, () => {
        cy.visit('https://practice-automation.com/tables/');
        cy.get('.wp-block-table').within(() => {
            cy.get('td').eq(0).should('contain', 'Item');
            cy.get('td').eq(1).should('contain', 'aaa');
        });
    });
});
