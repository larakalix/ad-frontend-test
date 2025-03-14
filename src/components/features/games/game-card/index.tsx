import type { Game } from "@/types/game.type";
import Image from "next/image";
import { formatPrice } from "@/utils/utils";
import { Button } from "@/components/ui/button";

type Props = {
    game: Game;
};

export const GameCard = ({ game }: Props) => {
    return (
        <div className="p-6 border border-card rounded-xl flex flex-col gap-y-5">
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

            <div className="flex-1">
                <span className="block text-subtitle uppercase text-base font-bold pb-3">
                    {game.genre}
                </span>

                <div className="flex justify-between items-center text-foreground">
                    <h2 className="text-lg font-bold">{game.name}</h2>
                    <p className="text-xl font-bold">
                        {formatPrice(game.price)}
                    </p>
                </div>
            </div>

            <footer>
                <Button color="primary" size="md" className="uppercase">
                    Add to cart
                </Button>
            </footer>
        </div>
    );
};
