import type { Game } from "@/types/game.type";

import { create } from "zustand";

export type GamesStoreState = {
    catalogue: Game[];
    setGames: (games: Game[]) => void;
};

export const useGamesStore = create<GamesStoreState>()((set, get) => ({
    catalogue: [],
    setGames: (games) => set({ catalogue: games }),
}));
