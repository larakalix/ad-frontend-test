import type { Game } from "@/types/game.type";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type CartStoreState = {
    games: Game[];
    addToCart: (game: Game) => void;
    removeFromCart: (game: Game) => void;
    clearCart: VoidFunction;
};

export const useCartStore = create<CartStoreState>()(
    persist(
        (set, get) => ({
            games: [],
            addToCart: (game) => () => {
                const { games } = get();
                console.log("STATE => addToCart", games);
                set({ games: [...games, game] });
            },
            removeFromCart: (game) => () => {
                const { games } = get();
                set({ games: games.filter((g) => g.id !== game.id) });
            },
            clearCart: () => () => {
                set({ games: [] });
            },
        }),
        {
            name: "cart-storage",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);
