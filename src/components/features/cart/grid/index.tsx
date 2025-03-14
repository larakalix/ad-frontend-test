"use client";

import { CartGameCard } from "../cart-game-card";
import { useCartGrid } from "./hooks/use-cart-grid";

export const CartGrid = () => {
    const { games } = useCartGrid();

    return (
        <div className="col-span-1 lg:col-span-2">
            <header>
                <h2>Your cart</h2>
                <span>{games.length} items</span>
            </header>

            {games.map((game) => (
                <CartGameCard key={game.id} game={game} />
            ))}
        </div>
    );
};
