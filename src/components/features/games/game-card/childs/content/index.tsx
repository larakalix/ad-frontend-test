import type { GameCardProps } from "../../types/types";

import { formatPrice } from "@/utils/utils";

export const GameCardContent = ({ game }: GameCardProps) => {
    return (
        <div className="flex-1">
            <span className="block text-subtitle uppercase text-base font-bold pb-3">
                {game.genre}
            </span>

            <div className="flex justify-between items-center text-foreground">
                <h2 className="text-lg font-bold">{game.name}</h2>
                <p className="text-xl font-bold">{formatPrice(game.price)}</p>
            </div>
        </div>
    );
};
