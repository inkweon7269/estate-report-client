describe('Example', () => {
    it('Controls UI', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // cy.get('#alertbtn').click();
        // cy.get('[value=Confirm]').click();

        // window: alert
        /*
        cy.on('window:alert', (str) => {
            // mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        });
        */

        // window: confirm
        /*
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        });
        */

        // 새 탭으로 브라우저를 오픈할 경우
        /*
           invoke() : 자바스크립트 함수를 호출
           origin() : 웹 페이지의 원래 URL을 설정하는 기능을 수행
         */
        /*
        cy.get('#opentab').invoke('removeAttr', 'target').click();
        cy.origin('https://www.qaclickacademy.com/', () => {
            // 'navbarSupportedContent' 하위 링크 중에 'about'이 포함된 요소를 찾아 클릭
            cy.get('#navbarSupportedContent a[href*=about]').click();
            cy.get('.mt-50 h2').should('contain', 'QAClick Academy');
        });
        */

        // 테이블 제어
        /*
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text();

            if (text.includes('Python')) {
                cy.get('tr td:nth-child(2)')
                    .eq(index)
                    .next()
                    .then((price) => {
                        const priceText = price.text();
                        expect(priceText).to.eq('25');
                    });
            }
        });
        */

        // Mouse Hover Example
        /*
        // cy.get('div.mouse-hover-content').invoke('show');
        //  { force: true } : 클릭 동작을 강제로 실행하도록 지시합니다. 이를 사용하여 요소가 숨겨져 있거나 비활성화되어 있는 경우에도 클릭 동작을 수행할 수 있습니다.
        cy.contains('Top').click({ force: true });
        cy.url().should('include', 'top');
        */
    });
});
