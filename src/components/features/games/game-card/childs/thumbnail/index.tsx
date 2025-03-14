import type { GameCardProps } from "../../types/types";

import Image from "next/image";

export const GameCardThumbnail = ({ game }: GameCardProps) => {
    return (
        <figure className="overflow-hidden rounded-t-lg max-h-60">
            <Image
                className="w-full aspect-3/2 object-cover"
                src={game.image}
                alt={game.name}
                width={300}
                height={300}
                loading="lazy"
            />
        </figure>
    );
};
