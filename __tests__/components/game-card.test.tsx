import type { Game } from "@/types/game.type";

import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { GameCard } from "@/components/features/games/game-card";

const mockGame: Game = {
    id: "game1",
    name: "Test Game",
    description: "This is a test game",
    genre: "Action",
    price: 10,
    image: "/test.jpg",
    isNew: true,
};

const mockHandleAddGame = jest.fn();
const mockHandleRemove = jest.fn();
const mockCartHasGame = jest.fn();

jest.mock("hooks/useGameCard", () => ({
    useGameCard: () => ({
        cartHasGame: (id: string) => mockCartHasGame(id),
        handleAddGame: mockHandleAddGame,
        handleRemove: mockHandleRemove,
    }),
}));

jest.mock("utils/formatPrice", () => ({
    formatPrice: (price: number) => `$${price.toFixed(2)}`,
}));

describe("GameCard component", () => {
    beforeEach(() => {
        mockHandleAddGame.mockClear();
        mockHandleRemove.mockClear();
        mockCartHasGame.mockClear();
    });

    it("renders all subcomponents correctly when game is new and not in cart", () => {
        mockCartHasGame.mockReturnValue(false);

        render(<GameCard game={mockGame} />);

        expect(screen.getByText("New")).toBeInTheDocument();

        expect(screen.getByAltText(mockGame.name)).toBeInTheDocument();

        expect(screen.getByText(mockGame.genre)).toBeInTheDocument();

        expect(screen.getByText(mockGame.name)).toBeInTheDocument();

        expect(screen.getByText("$10.00")).toBeInTheDocument();

        expect(
            screen.getByRole("button", { name: /Add to cart/i })
        ).toBeInTheDocument();
    });

    it('renders the "Remove from cart" button when game is in cart', () => {
        mockCartHasGame.mockReturnValue(true);

        render(<GameCard game={mockGame} />);

        expect(
            screen.getByRole("button", { name: /Remove from cart/i })
        ).toBeInTheDocument();
    });

    it('calls handleAddGame when "Add to cart" button is clicked', () => {
        mockCartHasGame.mockReturnValue(false);

        render(<GameCard game={mockGame} />);

        const addButton = screen.getByRole("button", { name: /Add to cart/i });
        fireEvent.click(addButton);

        expect(mockHandleAddGame).toHaveBeenCalledWith(mockGame);
    });

    it('calls handleRemove when "Remove from cart" button is clicked', () => {
        mockCartHasGame.mockReturnValue(true);

        render(<GameCard game={mockGame} />);

        const removeButton = screen.getByRole("button", {
            name: /Remove from cart/i,
        });
        fireEvent.click(removeButton);

        expect(mockHandleRemove).toHaveBeenCalledWith(mockGame);
    });
});
