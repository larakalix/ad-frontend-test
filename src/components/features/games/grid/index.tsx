"use client";

import type { Game, GameData } from "@/types/game.type";

import { GameCard } from "../game-card";
import { GameProps } from "@/services/games/types";
import { useGamesGrid } from "./hooks/use-games-grid";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export const GamesGrid = ({ genre }: GameProps) => {
    const { disableSeeMoreButton, games, isLoading, handleSeeMore } =
        useGamesGrid({
            genre,
        });

    if (isLoading) {
        return (
            <div className="h-96 flex justify-center items-center">
                <Spinner />
            </div>
        );
    }

    return (
        <section className="w-full flex flex-col gap-y-12">
            {games.length === 0 && (
                <div className="w-full flex justify-center items-center py-12 border-card/50 rounded-lg">
                    <p className="text-foreground">No games found</p>
                </div>
            )}

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
                {games.map((game: Game) => {
                    return <GameCard key={game.id} game={game} />;
                })}
            </div>

            <section className="flex flex-wrap">
                <Button
                    color="secondary"
                    size="md"
                    width="auto"
                    className="uppercase"
                    disabled={disableSeeMoreButton}
                    onClick={handleSeeMore}
                >
                    See more
                </Button>
            </section>
        </section>
    );
};
