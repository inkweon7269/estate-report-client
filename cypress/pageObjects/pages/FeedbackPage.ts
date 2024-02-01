import BasePage from '@/cypress/pageObjects/BasePage';

export default class FeedbackPage extends BasePage {
    static load() {
        cy.visit('http://zero.webappsecurity.com/feedback.html');
    }

    static submitFeedback() {
        cy.fixture('feedbackData').then((data) => {
            const name = data.name;
            const email = data.email;
            const subject = data.subject;
            const message = data.message;

            cy.get('#name').type(name);
            cy.get('#email').type(email);
            cy.get('#subject').type(subject);
            cy.get('#comment').type(message);
            cy.contains('Send Message').click();
        });
    }
}
