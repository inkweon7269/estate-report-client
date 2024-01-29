describe('Cypress Url Test', () => {
    beforeEach(() => {
        cy.visit('https://example.com/');
    });

    afterEach(() => {
        cy.log('Running after each of my tests');
    });

    it('Assert Url', () => {
        cy.url().should('contain', 'example.com');
    });

    // skip() : 메소드는 해당 테스트를 건너뛰게 만듭니다.
    it.skip('Assert Title', () => {
        cy.title().should('contain', 'Example Domain');
    });

    it('Reload and Logs', () => {
        cy.log('Before Reload');
        cy.visit('https://example.com/');

        // reload() : 페이지 업데이트를 확인하거나 특정 액션 후에 페이지를 새로고침해야 할 때 사용됩니다.
        cy.reload();
        cy.log('After Reload');
    });
});
