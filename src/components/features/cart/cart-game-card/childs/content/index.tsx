import type { GameCardProps } from "@/components/features/games/game-card/types/types";

export const CartGameCardContent = ({ game }: GameCardProps) => {
    return (
        <>
            <h2 className="text-xl font-bold text-foreground">{game.name}</h2>

            <p className="text-subtitle text-base font-normal">
                {game.description}
            </p>
        </>
    );
};
