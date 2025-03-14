import type { GameCardProps } from "@/components/features/games/game-card/types/types";

import Image from "next/image";

export const CartGameCardThumbnail = ({ game }: GameCardProps) => {
    return (
        <figure className="w-64 overflow-hidden">
            <Image
                src={game.image}
                alt={game.name}
                width={256}
                height={156}
                className="object-cover"
                loading="lazy"
            />
        </figure>
    );
};
