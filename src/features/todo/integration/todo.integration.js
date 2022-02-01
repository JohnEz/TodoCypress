const createTodoAction = (text, id) => {
	cy.getByTestId("todo-input")
	.should("exist")
	.type(`${text}{enter}`);

	cy.getByTestId(`todo-objective-${id}`).should("exist");
}

describe("src/features/todo", () => {

	beforeEach(() => {
		cy.visit("http://localhost:3000/");
	});

	it("should add a new item to the list", () => {
		cy.getByTestId("todo-objective-1").should("not.exist");
		
		createTodoAction('onboard to Natwest', 1);

		cy.getByTestId("todo-objective-1").should("exist");

		//cy.screenshot();
	});

	it('should be able to complete and uncomplete a task', () => {

		createTodoAction('Call support', 1);

		cy.getByTestId("todo-objective-1-complete").should('not.be.checked');

		cy.getByTestId("todo-objective-1-complete").click();

		cy.getByTestId("todo-objective-1-complete").should('be.checked');

		cy.getByTestId("todo-objective-1-complete").click();

		cy.getByTestId("todo-objective-1-complete").should('not.be.checked');

	});

	it('should be able to delete a task', () => {

		createTodoAction('Call support', 1);

		cy.getByTestId("todo-objective-1").should("exist");

		cy.getByTestId("todo-objective-1-delete").trigger('mouseover');

		// todo add a check for the x appearing, currently its done via css hover and isnt checkable other than via screenshot

		//cy.screenshot();

		cy.getByTestId("todo-objective-1-delete").click();
		
		cy.getByTestId("todo-objective-1-delete").should('not.exist');
		cy.getByTestId("todo-objective-1").should("not.exist");

		//cy.screenshot();

	});

	it('should have correct item count', () => {

		cy.getByTestId('todo-counter').should('contain', '0 items left');

		//cy.screenshot();

		createTodoAction('Call support', 1);

		cy.getByTestId('todo-counter').should('contain', '1 item left');

		//cy.screenshot();

		createTodoAction('Call support 2', 2);

		cy.getByTestId('todo-counter').should('contain', '2 items left');

		//cy.screenshot();

		cy.getByTestId("todo-objective-1-delete").click();

		cy.getByTestId('todo-counter').should('contain', '1 item left');

		//cy.screenshot(); 

		cy.getByTestId("todo-objective-2-complete").click();

		cy.getByTestId('todo-counter').should('contain', '0 items left');

		//cy.screenshot();
	});
	
});
