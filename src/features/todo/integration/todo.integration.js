describe("src/features/todo", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/");
	});
	it("should add a new item to the list", () => {
		//check the item does not already exist
		cy.getByTestId("todo-input")
			.should("exist")
			.type("onboard to Natwest{enter}");
		cy.getByTestId("todo-objective-1").should("exist");
		cy.screenshot();
	});
});
