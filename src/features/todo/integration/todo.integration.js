describe('src/features/todo', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    it('should load the todo list', () => {
        cy.getByTestId('todo').should('exist');
    });

    it('should add a new item to the list', () => {
        cy.getByTestId('todo-objective-1').should('not.exist');

        cy.getByTestId('todo-input').should('exist').type('New objective {enter}');

        cy.getByTestId('todo-objective-1').should('exist');
    });

    it('should count the number of items left', () => {
        cy.getByTestId('todo-counter').should('have.text', '0 items left');

        cy.getByTestId('todo-input').should('exist').type('New objective {enter}');

        cy.getByTestId('todo-objective-1').should('exist');
        cy.getByTestId('todo-counter').should('have.text', '1 item left');
    });

    it('should complete an item', () => {
        cy.getByTestId('todo-input').should('exist').type('New objective {enter}');
        cy.getByTestId('todo-counter').should('have.text', '1 item left');
        cy.getByTestId('todo-objective-1-complete').should('exist').click();
        cy.getByTestId('todo-counter').should('have.text', '0 items left');
    });

    it('should delete an item', () => {
        cy.getByTestId('todo-input').should('exist').type('New objective {enter}');

        cy.getByTestId('todo-objective-1').should('exist');
        cy.getByTestId('todo-counter').should('have.text', '1 item left');

        cy.getByTestId('todo-objective-1-delete').should('exist').click();

        cy.getByTestId('todo-objective-1').should('not.exist');
        cy.getByTestId('todo-counter').should('have.text', '0 items left');
    });

})