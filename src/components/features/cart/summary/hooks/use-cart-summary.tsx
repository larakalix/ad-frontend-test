import { useCartStore } from "@/stores/cart-store";

export const useCartSummary = () => {
    const { games } = useCartStore((state) => state);

    const summary = {
        total: games.reduce((acc, game) => acc + game.price, 0),
    };

    return {
        games,
        total: summary.total,
    };
};
