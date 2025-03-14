"use client";

import { CartGameCard } from "../cart-game-card";
import { useCartGrid } from "./hooks/use-cart-grid";

export const CartGrid = () => {
    const { games } = useCartGrid();

    return (
        <>
            <header className="text-foreground flex flex-col gap-y-3 col-span-1 lg:col-span-3">
                <h2 className="text-4xl font-bold">Your cart</h2>
                <span className="text-2xl font-normal">
                    {games.length} items
                </span>
            </header>

            <div className="col-span-1 lg:col-span-2 flex flex-col gap-12">
                <div>
                    {games.map((game) => (
                        <CartGameCard key={game.id} game={game} />
                    ))}
                </div>
            </div>
        </>
    );
};
