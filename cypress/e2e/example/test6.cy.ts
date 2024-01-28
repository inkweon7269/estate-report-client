describe('테스트 훅(hook)', () => {
    /*
        before()
        해당 그룹의 모든 테스트 케이스들이 실행되기 이전에 한 번 실행되는 함수입니다.
        일반적으로 테스트 전에 필요한 설정 작업을 수행하는 데 사용됩니다.
        예를 들어, 브라우저를 열거나 테스트 데이터를 초기화하는 등의 작업을 수행할 수 있습니다.
    */
    before(() => {
        cy.fixture('example').then((data) => {
            globalThis.data = data;
        });
    });

    it('Form', function () {
        cy.visit('https://rahulshettyacademy.com/angularpractice');
        cy.get('input[name=name]:nth-child(2)').type(globalThis.data.name);
        cy.get('select').select(globalThis.data.gender);
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', globalThis.data.name);
        cy.get('input[name=name]:nth-child(2)').should('have.attr', 'minlength', '2');
        cy.get('#inlineRadio3').should('be.disabled');

        cy.get(':nth-child(2) > .nav-link').click();
        cy.selectProduct('BlackBerry');
    });

    /*
        after()
        - 해당 그룹의 테스트 모든 케이스들이 실행된 후에 한 번 실행되는 함수입니다.
        - 일반적으로 테스트 후에 정리 작업이나 리소스 해제와 같은 작업을 수행하는 데 사용됩니다.
    */
    after(() => {});

    /*
        beforeEach()
        - 해당 그룹의 각 테스트 케이스가 실행되기 이전에 매번 실행되는 함수입니다.
        - 일반적으로 각 테스트 케이스마다 필요한 초기화 작업을 수행하는 데 사용됩니다.
    */
    beforeEach(() => {});

    /*
        afterEach()
        - 해당 그룹의 각 테스트 케이스가 실행된 후에 매번 실행되는 함수입니다.
        - 일반적으로 각 테스트 케이스마다 정리 작업을 수행하거나 상태를 초기화하는 데 사용됩니다.
    */
    afterEach(() => {});
});
