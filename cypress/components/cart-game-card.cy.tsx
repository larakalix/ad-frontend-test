import { Game } from "@/types/game.type";

import { allGames } from "@/utils/endpoint";
import { CartGameCard } from "@/components/features/cart/cart-game-card";
import "@/app/styles/tw.css";

describe("<CartGameCard />", () => {
    const game = {
        ...allGames[0],
        image: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
    } satisfies Game;

    beforeEach(() => {
        cy.mount(<CartGameCard game={game} />);
    });

    it("renders without crashing", () => {
        cy.get("[data-cy=cart-game-card]").should("exist");
    });

    it("displays the correct cart game title", () => {
        cy.get("[data-cy=cart-game-title]")
            .should("be.visible")
            .and("contain.text", game.name);
    });
});
