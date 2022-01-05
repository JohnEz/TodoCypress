

describe('src/app', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    it('loads the app', () => {
        cy.get('.App-header').should('have.length', 1);
    })

})