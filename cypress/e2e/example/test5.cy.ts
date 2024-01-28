import 'cypress-iframe';

describe('Example', () => {
    it('Controls UI', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.frameLoaded('#courses-iframe');

        cy.iframe().find('a[href*=mentorship]').eq(0).click();
    });
});
