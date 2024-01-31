import method from 'async-validator/dist-types/validator/method';

describe('Learn REST API Testing with Cypress', () => {
    const baseURL = 'https://reqres.in/api';

    it.skip('API Tests - Validate Headers', () => {
        cy.request(`${baseURL}/user/2`).then((res) => {
            cy.log(JSON.stringify(res.body.data.name));
            cy.log(JSON.stringify(res.headers));
        });
    });

    it.skip('API Tests - Validate Headers', () => {
        cy.request(`${baseURL}/user/2`).as('user');

        // its() : 체인된 객체의 속성에 접근할 때 사용합니다.
        // cy.get('@user').its('headers.content-type').should('include', 'application/json');
        cy.get('@user').its('headers').its('content-type').should('include', 'application/json');
        cy.get('@user').its('headers').its('connection').should('include', 'keep-alive');
    });

    it.skip('API Tests - Status Codes', () => {
        cy.request(`${baseURL}/user/2`).as('existingUser');
        cy.get('@existingUser').its('status').should('equal', 200);

        cy.request({ url: `${baseURL}/user/non-exist`, failOnStatusCode: false }).as('nonExistingUser');
        cy.get('@nonExistingUser').its('status').should('equal', 404);
    });

    it.skip('API Tests - GET Request', () => {
        cy.request({ url: `${baseURL}/user/2`, method: 'GET' }).as('user');
        cy.get('@user').then((res: any) => {
            cy.log(JSON.stringify(res.body));
            expect(res.body.data.id).equal(2);
            expect(res.body.data.year).equal(2001);

            // not.to.contain() : 테스트 대상이 특정 값을 포함하고 있지 않음을 검증
            expect(res.body.data.name).not.to.contain('SomeFunnyName');

            const userId = res.body.data.id;
            expect(userId).to.equal(2);
        });
    });

    it('API Tests - POST Request', () => {
        cy.request({
            url: `${baseURL}/login`,
            method: 'POST',
            body: { email: 'eve.holt@reqres.in', password: 'cityslicka' },
        }).as('loginRequest');

        cy.get('@loginRequest').its('status').should('equal', 200);
        cy.get('@loginRequest').then((res: any) => {
            expect(res.body.token).to.equal('QpwL5tke4Pnpja7X4');
        });
    });

    it('API Tests - POST Request - Error', () => {
        cy.request({
            url: `${baseURL}/login`,
            method: 'POST',
            failOnStatusCode: false,
            body: { email: 'eve.holt@reqres.in' },
        }).as('loginRequest');

        cy.get('@loginRequest').its('status').should('equal', 400);
        cy.get('@loginRequest').then((res: any) => {
            expect(res.body.error).to.equal('Missing password');
        });
    });

    it('API Tests - DELETE Request', () => {
        cy.request({ url: `${baseURL}/users/2`, method: 'DELETE' }).as('deleteUser');
        cy.get('@deleteUser').its('status').should('equal', 204);
    });

    it('API Tests - PUT Request', () => {
        cy.request({
            url: `${baseURL}/users/2`,
            method: 'PUT',
            body: { name: 'name-update' },
            auth: { bearer: 'my-token-value' },
        }).as('putRequest');

        cy.get('@putRequest').its('status').should('equal', 200);
        cy.get('@putRequest').then((res: any) => {
            expect(res.body.name).to.equal('name-update');
        });
    });
});
