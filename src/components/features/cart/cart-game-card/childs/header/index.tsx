import type { GameCardProps } from "@/components/features/games/game-card/types/types";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGameCard } from "@/components/features/games/game-card/hooks/use-game-card";

export const CartGameCardHeader = ({ game }: GameCardProps) => {
    const { handleRemove } = useGameCard();

    return (
        <header className="w-full flex justify-between items-center pb-0">
            <span className="block text-subtitle uppercase text-base font-bold tracking-normal">
                {game.genre}
            </span>

            <Button
                color="ghost"
                size="sm"
                width="auto"
                className="p-0"
                onClick={() => handleRemove(game)}
            >
                <X className="text-card" size={20} />
            </Button>
        </header>
    );
};
