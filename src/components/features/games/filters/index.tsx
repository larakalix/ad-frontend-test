"use client";

import { useGameFilter } from "./hooks/use-game-filter";

export const GameFilters = () => {
    const { filters, handleChange } = useGameFilter();

    return (
        <header className="py-12 border-b border-light-border-1 w-full">
            <h1 className="text-start font-bold text-4xl text-foreground tracking-1">
                Top Sellers
            </h1>

            <div className="text-end">
                <span className="text-foreground font-bold text-xl mr-6 px-6 border-r border-card tracking-1">
                    Genre
                </span>
                <select
                    name="filter"
                    onChange={(e) => handleChange(e.target.value)}
                >
                    <option value="">All</option>
                    {filters.map((filter) => (
                        <option key={filter} value={filter}>
                            {filter}
                        </option>
                    ))}
                </select>
            </div>
        </header>
    );
};
