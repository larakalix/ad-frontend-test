"use server";

import { ApiResponse } from "@/types/api.type";
import { GameData } from "@/types/game.type";
import { GameProps } from "./types";
import { globalEnv } from "@/utils/env-config";

export const getGames = async ({
    genre,
    page = 1,
}: GameProps): Promise<ApiResponse<GameData | null>> => {
    try {
        const response = await fetch(
            `${globalEnv.ApiUrl}games?${new URLSearchParams({
                genre,
                page: `${page}`,
            })}`
        );
        const data = await response.json();
        const { games, availableFilters } = data;

        return {
            data: { games, availableFilters },
            message: "Games fetched successfully",
            status: 200,
            currentPage: data.currentPage,
            totalPages: data.totalPages,
        };
    } catch (error) {
        return {
            data: null,
            message: "An error occurred while fetching games",
            status: 500,
            currentPage: 1,
            totalPages: 1,
        };
    }
};
