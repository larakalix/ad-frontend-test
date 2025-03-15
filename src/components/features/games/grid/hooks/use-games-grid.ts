import type { GameProps } from "@/services/games/types";
import type { GameData } from "@/types/game.type";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { gameQueryConfig } from "@/services/games/query-config";
import { useFilterStore } from "@/stores/filter-store";

const PRODUCTS_PER_PAGE = 12;

export const useGamesGrid = ({ genre, page }: GameProps) => {
    const [currentPage, setCurrentPage] = useState(() => page ?? 1);
    const { data, error, isLoading, isRefetching } = useQuery(
        gameQueryConfig({ genre, page: currentPage })
    );
    const { games, availableFilters } = (data?.data ?? {
        games: [],
        availableFilters: [],
    }) as GameData;

    const disableSeeMoreButton =
        data?.currentPage === data?.totalPages ||
        isLoading ||
        isRefetching ||
        games.length === 0 ||
        games.length % PRODUCTS_PER_PAGE !== 0;

    const handleSeeMore = () => {
        if (disableSeeMoreButton) return;

        setCurrentPage((prev) => prev + 1);
    };

    useEffect(() => {
        useFilterStore.setState({ filters: availableFilters });
    }, [availableFilters]);

    return {
        availableFilters,
        disableSeeMoreButton,
        error,
        games,
        isLoading,
        handleSeeMore,
    };
};
