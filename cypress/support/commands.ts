/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

/*
declare namespace Cypress {
    interface Chainable {
        loginToApplication(): void;
    }
}

Cypress.Commands.add('loginToApplication', () => {
    cy.visit('/');
    cy.get('[name="email"]').type('in12@test.com');
    cy.get('[name="password"]').type('xptmxm1!');
    cy.get('form').submit();
});
*/

declare namespace Cypress {
    interface Chainable {
        selectProduct(productName: string): void;
        LoginAPI(): any;

        /**
         * Navigates to the home page of our application
         */
        visitHomepage(): Chainable<Element>;

        /**
         * Navigates to the login page of our application
         */
        visitLoginpage(): Chainable<Element>;

        /**
         * Navigates to the feedback page of our application
         */
        visitFeedbackpage(): Chainable<Element>;

        /**
         * @param seconds - how many seconds should the execution wait
         */
        waitForSeconds(seconds: number): Chainable<Element>;

        /**
         *
         * @param selector - Visible Selector
         */
        isVisible(selector: string): Chainable<Element>;

        /**
         *
         * @param selector - Hidden Selector
         */
        isHidden(selector: string): Chainable<Element>;

        /**
         *
         * @param size
         */
        setResolution(size: any): Chainable<Element>;

        /**
         *
         * @param username
         * @param password
         */
        login(username: string, password: string): Chainable<Element>;
    }
}

Cypress.Commands.add('selectProduct', (productName) => {
    cy.get('h4.card-title').each(($el, index, $list) => {
        if ($el.text().includes(productName)) {
            cy.get('button.btn.btn-info').eq(index).click();
        }
    });
});

Cypress.Commands.add('LoginAPI', () => {
    cy.request('POST', 'https://rahulshettyacademy.com/api/ecom/auth/login', {
        userEmail: 'anshika@gmail.com',
        userPassword: 'Iamking@000',
    }).then(function (response) {
        expect(response.status).to.eq(200);
        Cypress.env('token', response.body.token);
    });
});

Cypress.Commands.add('visitHomepage', () => {
    cy.visit('https://www.example.com');
});

Cypress.Commands.add('visitLoginpage', () => {
    cy.visit('http://zero.webappsecurity.com/login.html');
});

Cypress.Commands.add('visitFeedbackpage', () => {
    cy.visit('http://zero.webappsecurity.com/feedback.html');
});

Cypress.Commands.add('waitForSeconds', (seconds) => {
    cy.wait(seconds * 1000);
});

Cypress.Commands.add('isVisible', (selector) => {
    cy.get(selector).should('be.visible');
});

// http://zero.webappsecurity.com/index.html
Cypress.Commands.add('isHidden', (selector) => {
    cy.get(selector).should('not.exist');
});

Cypress.Commands.add('setResolution', (size) => {
    if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
    } else {
        cy.viewport(size);
    }
});

Cypress.Commands.add('login', (username, password) => {
    cy.get('#login_form').should('be.visible');
    cy.get('#user_login').type(username);
    cy.get('#user_password').type(password);
    cy.get('#user_remember_me').click();
    cy.contains('Sign in').click();
});
