Cypress.Commands.add("getByTestId", (dataTestId) => {
	return cy.get(`[data-test-id = "${dataTestId}"]`);
});
