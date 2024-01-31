describe('TC_003_Product_Detail', () => {
    it('Should verify the product details displayed', () => {
        cy.visit('https://www.demoblaze.com/index.html');

        cy.get('.hrefch').contains('Nexus 6').click();

        cy.get('.product-deatil').should('be.visible');
        cy.get('h2.name').contains('Nexus 6').should('be.visible');
        cy.get('h3.price-container').should('contain', '$650');
        cy.get('.btn-success').should('contain', 'Add to cart');
    });
});
