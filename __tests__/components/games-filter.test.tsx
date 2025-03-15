import { render, screen, fireEvent } from "@testing-library/react";
import { useGameFilter } from "@/components/features/games/filters/hooks/use-game-filter";
import { GameFilters } from "@/components/features/games/filters";

jest.mock("hooks/useGameFilter", () => ({
    useGameFilter: jest.fn(),
}));

describe("GameFilters component", () => {
    const mockHandleChange = jest.fn();
    const mockFilters = ["Action", "Adventure"];

    beforeEach(() => {
        (useGameFilter as jest.Mock).mockReturnValue({
            filters: mockFilters,
            handleChange: mockHandleChange,
        });
        mockHandleChange.mockClear();
    });

    it("renders header, label, and select with options", () => {
        render(<GameFilters genre="" />);

        expect(screen.getByText("Top Sellers")).toBeInTheDocument();

        expect(screen.getByText("Genre")).toBeInTheDocument();

        const selectElement = screen.getByRole("combobox");
        expect(selectElement).toBeInTheDocument();

        expect(screen.getByRole("option", { name: "All" })).toBeInTheDocument();

        mockFilters.forEach((filter) => {
            expect(
                screen.getByRole("option", { name: filter })
            ).toBeInTheDocument();
        });
    });

    it("calls handleChange with lower-case value when an option is selected", () => {
        render(<GameFilters genre="" />);
        const selectElement = screen.getByRole("combobox");

        fireEvent.change(selectElement, { target: { value: "Action" } });

        expect(mockHandleChange).toHaveBeenCalledWith("action");
    });
});
