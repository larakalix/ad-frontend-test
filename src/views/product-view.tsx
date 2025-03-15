import { GameFilters } from "@/components/features/games/filters";
import { GamesGrid } from "@/components/features/games/grid";
import type { GameProps } from "@/services/games/types";

export const ProductView = ({ genre }: GameProps) => {
    return (
        <>
            <GameFilters genre={genre} />

            <GamesGrid genre={genre} />
        </>
    );
};
