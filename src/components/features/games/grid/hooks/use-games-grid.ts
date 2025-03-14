import type { GameProps } from "@/services/games/types";
import type { GameData } from "@/types/game.type";

import { useQuery } from "@tanstack/react-query";
import { gameQueryConfig } from "@/services/games/query-config";
import { useEffect } from "react";
import { useFilterStore } from "@/stores/filter-store";

export const useGamesGrid = ({ genre }: GameProps) => {
    const { data, error } = useQuery(gameQueryConfig({ genre }));
    const { games, availableFilters } = (data?.data ?? {
        games: [],
        availableFilters: [],
    }) as GameData;

    useEffect(() => {
        useFilterStore.setState({ filters: availableFilters });
    }, [availableFilters]);

    return { games, availableFilters, error };
};
