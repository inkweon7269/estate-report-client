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
