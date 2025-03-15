"use client";

import type { GameProps } from "@/services/games/types";

import { useGameFilter } from "./hooks/use-game-filter";

export const GameFilters = ({ genre = "" }: GameProps) => {
    const { filters, handleChange } = useGameFilter({ genre });

    return (
        <header className="py-12 border-b border-light-border-1 w-full mb-8 lg:mb-12">
            <h1 className="text-start font-bold text-4xl text-foreground tracking-1">
                Top Sellers
            </h1>

            <div className="text-start lg:text-end pt-8 lg:pt-12">
                <span className="text-foreground font-bold text-xl mr-6 pr-6 border-r border-card tracking-1">
                    Genre
                </span>

                <select
                    name="filter"
                    defaultValue={genre}
                    onChange={(e) => handleChange(e.target.value.toLowerCase())}
                >
                    <option value="">All</option>
                    {filters.map((filter) => (
                        <option key={filter.toLowerCase()} value={filter}>
                            {filter}
                        </option>
                    ))}
                </select>
            </div>
        </header>
    );
};
