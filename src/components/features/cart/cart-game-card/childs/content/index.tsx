import type { GameCardProps } from "@/components/features/games/game-card/types/types";
import { formatPrice } from "@/utils/utils";

export const CartGameCardContent = ({ game }: GameCardProps) => {
    return (
        <>
            <h2 className="text-xl font-bold text-foreground tracking-1">{game.name}</h2>

            <p className="text-subtitle text-base font-normal tracking-normal">
                {game.description}
            </p>

            <div className="w-full text-end pr-16">
                <span className="text-xl font-bold text-foreground tracking-1">
                    {formatPrice(game.price)}
                </span>
            </div>
        </>
    );
};
