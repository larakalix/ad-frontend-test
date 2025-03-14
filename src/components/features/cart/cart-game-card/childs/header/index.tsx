import type { GameCardProps } from "@/components/features/games/game-card/types/types";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CartGameCardHeader = ({ game }: GameCardProps) => {
    return (
        <header className="w-full flex justify-between items-center pb-1">
            <span className="block text-subtitle uppercase text-base font-bold">
                {game.genre}
            </span>

            <Button color="ghost" size="sm" width="auto" className="p-0">
                <X className="text-foreground" size={20} />
            </Button>
        </header>
    );
};
