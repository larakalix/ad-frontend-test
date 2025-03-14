import type { GameCardProps } from "../../games/game-card/types/types";

import { CartGameCardHeader } from "./childs/header";
import { CartGameCardContent } from "./childs/content";
import { CartGameCardThumbnail } from "./childs/thumbnail";

export const CartGameCard = ({ game }: GameCardProps) => {
    return (
        <div className="px-4 py-5 border-b border-card/50 flex items-center justify- gap-6">
            <CartGameCardThumbnail game={game} />

            <div className="flex flex-col gap-y-2 w-full">
                <CartGameCardHeader game={game} />

                <CartGameCardContent game={game} />
            </div>
        </div>
    );
};
