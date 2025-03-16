context("Add to card action", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });

    describe("Implicit Assertions", () => {
        it("Validates >4 game cards, adds to cart on first 4, then removes from 3rd and 4th", () => {
            cy.get("[data-cy=game-card]")
                .should("have.length.gt", 4)
                .then(($cards) => {
                    for (let i = 0; i < 4; i++) {
                        cy.wrap($cards[i]).within(() => {
                            cy.get("[data-cy=add-to-cart]").click();
                            cy.wait(3000);
                        });
                    }

                    for (let i = 2; i < 4; i++) {
                        cy.wrap($cards[i]).within(() => {
                            cy.get("[data-cy=remove-from-cart]").click();
                            cy.wait(3000);
                        });
                    }
                });
        });
    });
});
