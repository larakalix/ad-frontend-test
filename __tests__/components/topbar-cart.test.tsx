import type { Game } from "@/types/game.type";

import { render, screen } from "@testing-library/react";
import { allGames } from "@/utils/endpoint";
import { useTopbarCart } from "@/components/features/cart/top-bar-cart/hooks/use-topbar-cart";
import { TopbarCart } from "@/components/features/cart/top-bar-cart";

jest.mock("hooks/useTopbarCart", () => ({
    useTopbarCart: jest.fn(),
}));

jest.mock("next/link", () => {
    return ({
        children,
        href,
    }: {
        children: React.ReactNode;
        href: string;
    }) => {
        return <a href={href}>{children}</a>;
    };
});

describe("TopbarCart component", () => {
    const mockGames: Game[] = [allGames[0], allGames[1]];

    beforeEach(() => {
        // Set up the hook to return a games array with two games
        (useTopbarCart as jest.Mock).mockReturnValue({
            games: mockGames,
        });
    });

    it("renders the Link with correct href, icon, and game count", () => {
        render(<TopbarCart />);

        // Verify the Link's href attribute (assuming ROUTES.cart equals '/cart')
        const linkElement = screen.getByRole("link");
        expect(linkElement).toHaveAttribute("href", "/cart");

        // Verify that the ShoppingCart icon is rendered by checking for an element with the class "text-title"
        const iconElement = linkElement.querySelector(".text-title");
        expect(iconElement).toBeInTheDocument();

        // Verify that the number of games (mockGames.length) is displayed
        expect(
            screen.getByText(mockGames.length.toString())
        ).toBeInTheDocument();
    });
});
