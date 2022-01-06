

describe('src/app', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    it('loads the app', () => {
        cy.getByTestId('app').should('have.length', 1);
    })

})