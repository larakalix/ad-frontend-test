import type { Game } from "@/types/game.type";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type CartStoreState = {
    games: Game[];
    addToCart: (game: Game) => void;
    removeFromCart: (id: Game["id"]) => void;
    cartHasGame: (id: Game["id"]) => boolean;
    clearCart: VoidFunction;
};

export const useCartStore = create<CartStoreState>()(
    persist(
        (set, get) => ({
            games: [],
            addToCart: (game: Game) => {
                set((state) => ({ games: [...state.games, game] }));
            },
            removeFromCart: (id) => {
                set((state) => ({
                    games: state.games.filter((g) => g.id !== id),
                }));
            },
            clearCart: () => {
                set({ games: [] });
            },
            cartHasGame: (id: Game["id"]) => {
                return get().games.some((game) => game.id === id);
            },
        }),
        {
            name: "cart-storage",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);
