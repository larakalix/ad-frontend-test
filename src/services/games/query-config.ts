import { queryOptions } from "@tanstack/react-query";
import { getGames } from ".";
import { GameProps } from "./types";

export const gameQueryConfig = ({ genre }: GameProps) =>
    queryOptions({
        queryKey: ["get-games", { genre }],
        queryFn: () => getGames({ genre }),
    });
