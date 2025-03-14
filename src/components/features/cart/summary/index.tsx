"use client";

import { formatPrice } from "@/utils/utils";
import { useCartSummary } from "./hooks/use-cart-summary";

export const CartSummary = () => {
    const { games, total } = useCartSummary();

    return (
        <div className="col-span-1">
            <header>
                <h1>Order summary</h1>
                <span>{games.length}</span>
            </header>

            <ul className="border-b border-black">
                {games.map((game) => (
                    <li
                        key={game.id}
                        className="flex justify-between items-center"
                    >
                        <span>{game.name}</span>
                        <span>{formatPrice(game.price)}</span>
                    </li>
                ))}
            </ul>

            <footer>
                <span>Total</span>
                <span>{formatPrice(total)}</span>
            </footer>
        </div>
    );
};
