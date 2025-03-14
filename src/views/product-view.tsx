import { GameFilters } from "@/components/features/games/filters";
import { GamesGrid } from "@/components/features/games/grid";
import type { GameProps } from "@/services/games/types";

type Props = GameProps;

export const ProductView = ({ genre }: Props) => {
    return (
        <>
            <GameFilters />

            <GamesGrid genre={genre} />
        </>
    );
};
