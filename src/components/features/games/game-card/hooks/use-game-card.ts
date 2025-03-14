import type { Game } from "@/types/game.type";
import type { GameCardProps } from "../types/types";

import { toast } from "sonner";
import { useCartStore } from "@/stores/cart-store";

export const useGameCard = ({}: GameCardProps) => {
    const { addToCart } = useCartStore((state) => state);

    const handleAddGame = (game: Game) => {
        console.log("Adding game to cart", game);

        addToCart(game);

        toast.success(`${game.name} added to cart`);
    };

    return { handleAddGame };
};
