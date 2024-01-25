describe('Example', () => {
    it('그린카트', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);

        // selenium get hit url in browser, cypress get acts like findElement of selenium
        // handling invisible elements
        // cy.get('.product').should('have.length', 4);

        // 검색 이후 실제 노출된 상품의 개수가 일치한지 확인
        // cy.get('.product:visible').should('have.length', 4);

        // 부모 - 자식 관계 표기
        cy.get('.products').as('productLocator');
        // cy.get('@productLocator').find('.product').should('have.length', 4);
        // cy.get(':nth-child(1) > .product-action > button').click();
        /*
        cy.get('@productLocator')
            .find('.product')
            .eq(2)
            .contains('ADD TO CART')
            .click()
            .then(() => {
                console.log('sf');
            });
        */

        cy.get('@productLocator')
            .find('.product')
            .each(($el, index, $list) => {
                const text = $el.find('h4.product-name').text();

                if (text.includes('Cashews')) {
                    // wrap() : 기존 객체를 Cypress 체인으로 감싸서 Cypress의 다양한 명령어를 사용할 수 있도록 변경
                    cy.wrap($el).find('button').click();
                }
            });

        // Cypress & jQuery
        /*
        cy.get('.brand').should('have.text', 'GREENKART');
        cy.get('.brand').then((logoElem) => {
            cy.log(logoElem.text());
        });
        */
        // 에러 발생 cy.get('.brand').text();
    });
});
