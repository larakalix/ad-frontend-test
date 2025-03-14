"use client";

import { ShoppingCart } from "lucide-react";
import { useTopbarCart } from "./hooks/use-topbar-cart";

export const TopbarCart = () => {
    const { games } = useTopbarCart();

    return (
        <span>
            <ShoppingCart className="text-title" size={20} />

            <span className="text-sm font-semibold text-dark-gray-1">
                {games.length}
            </span>
        </span>
    );
};
