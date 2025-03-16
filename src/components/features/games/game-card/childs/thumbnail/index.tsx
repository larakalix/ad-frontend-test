import type { GameCardProps } from "../../types/types";
import type { ComponentProps } from "react";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/utils/utils";

type Props = ComponentProps<"figure"> & GameCardProps;

export const GameCardThumbnail = ({ className, game }: Props) => {
    return (
        <figure
            className={cn(
                "overflow-hidden rounded-t-2xl max-h-60 relative",
                className
            )}
        >
            {game.isNew && (
                <Badge color="primary" className="absolute top-3 left-3">
                    New
                </Badge>
            )}

            <Image
                data-cy="game-image"
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
