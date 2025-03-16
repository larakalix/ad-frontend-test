import type { Game } from "@/types/game.type";

import { allGames } from "@/utils/endpoint";
import { GameCard } from "@/components/features/games/game-card";
import "@/app/styles/tw.css";

describe("GameCard component", () => {
    const game = {
        ...allGames[0],
        image: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
    } satisfies Game;

    beforeEach(() => {
        cy.mount(<GameCard game={game} />);
    });

    it("renders without crashing", () => {
        cy.get("[data-cy=game-card]").should("exist");
    });

    it("displays the correct game title", () => {
        cy.get("[data-cy=game-title]")
            .should("be.visible")
            .and("contain.text", game.name);
    });

    it("shows the game image with the correct source", () => {
        cy.get("[data-cy=game-image]").should("be.visible");
    });
});
