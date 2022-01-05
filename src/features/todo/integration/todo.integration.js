describe('src/app', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    it('loads the app', () => {
        cy.getByTestId('todo-objective-1').should('not.exist');

        cy.getByTestId('todo-input').should('exist').type('New objective');

        cy.getByTestId('todo-add').should('exist').click();

        cy.getByTestId('todo-objective-1').should('exist');
    })

})