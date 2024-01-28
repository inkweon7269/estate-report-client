import HomePage from '@/cypress/e2e/pageObjects/HomePage';
import Product from '@/cypress/e2e/pageObjects/Product';

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
        const homePage = new HomePage();
        const productPage = new Product();

        cy.visit('https://rahulshettyacademy.com/angularpractice');

        homePage.getEditBox().type(globalThis.data.name);
        homePage.getGender().select(globalThis.data.gender);
        homePage.getTwoWayDataBinding().should('have.value', globalThis.data.name);
        homePage.getEditBox().should('have.attr', 'minlength', '2');
        homePage.getEntrepreneaur().should('be.disabled');

        // pause() : 테스트를 일시 중지 이후 디버깅 기능 활성화 (console 탭에서 확인 가능)
        // cy.pause();
        homePage.getShopTab().click();

        globalThis.data.productName.forEach((item) => {
            cy.selectProduct(item);
        });

        productPage.checkOutButton().click();
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
