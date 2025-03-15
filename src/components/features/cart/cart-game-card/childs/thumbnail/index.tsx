import type { ComponentProps } from "react";
import type { GameCardProps } from "@/components/features/games/game-card/types/types";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/utils/utils";

type Props = ComponentProps<"figure"> & GameCardProps;

export const CartGameCardThumbnail = ({ className, game }: Props) => {
    return (
        <figure
            className={cn(
                "overflow-hidden min-w-64 min-h-40 relative",
                className
            )}
        >
            {game.isNew && (
                <Badge color="primary" className="absolute top-3 left-3">
                    New
                </Badge>
            )}

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
