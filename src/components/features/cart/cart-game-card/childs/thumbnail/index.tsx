import type { GameCardProps } from "@/components/features/games/game-card/types/types";

import Image from "next/image";

export const CartGameCardThumbnail = ({ game }: GameCardProps) => {
    return (
        <figure className="min-w-64 min-h-40 overflow-hidden">
            <Image
                src={game.image}
                alt={game.name}
                width={256}
                height={156}
                className="block w-64 h-40 object-cover"
                loading="lazy"
            />
        </figure>
    );
};
