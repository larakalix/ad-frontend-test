import type { Game } from "@/types/game.type";

import { create } from "zustand";

export type GamesStoreState = {
    games: Game[];
};

export const useGamesStore = create<GamesStoreState>()(() => ({
    games: [],
}));
