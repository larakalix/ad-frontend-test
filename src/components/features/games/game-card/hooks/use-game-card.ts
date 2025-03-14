import type { Game } from "@/types/game.type";

import { toast } from "sonner";
import { useCartStore } from "@/stores/cart-store";

export const useGameCard = () => {
    const { addToCart, cartHasGame, removeFromCart } = useCartStore(
        (state) => state
    );

    const handleAddGame = (game: Game) => {
        addToCart(game);

        toast.success(`${game.name} added to cart`);
    };

    const handleRemove = (game: Game) => {
        removeFromCart(game.id);

        toast.warning(`${game.name} removed from cart`);
    };

    return { handleAddGame, cartHasGame, handleRemove };
};
