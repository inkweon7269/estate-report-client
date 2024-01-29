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
});
