"use client";

import type { GameCardProps } from "./types/types";

import { GameCardContent } from "./childs/content";
import { GameCardThumbnail } from "./childs/thumbnail";
import { GameCardActions } from "./childs/actions";

export const GameCard = ({ game }: GameCardProps) => {
    return (
        <div className="p-6 border border-card rounded-xl flex flex-col gap-y-5">
            <GameCardThumbnail game={game} />

            <GameCardContent game={game} />

            <GameCardActions game={game} />
        </div>
    );
};
