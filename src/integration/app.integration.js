describe("src/app", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/");
	});
	it("should load application", () => {
		cy.getByTestId("app").should("exist");
	});
});
