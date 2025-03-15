import { keepPreviousData, queryOptions } from "@tanstack/react-query";
import { getGames } from ".";
import { GameProps } from "./types";

export const gameQueryConfig = ({ genre, page = 1 }: GameProps) =>
    queryOptions({
        queryKey: ["get-games", { genre, page }],
        queryFn: () => getGames({ genre, page }),
        placeholderData: keepPreviousData,
    });
