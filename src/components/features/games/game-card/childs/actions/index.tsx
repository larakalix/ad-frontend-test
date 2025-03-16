import type { GameCardProps } from "../../types/types";

import { Button } from "@/components/ui/button";
import { useGameCard } from "../../hooks/use-game-card";

export const GameCardActions = ({ game }: GameCardProps) => {
    const { cartHasGame, handleAddGame, handleRemove } = useGameCard();
    const itemExists = cartHasGame(game.id) ?? false;

    return (
        <footer data-cy="game-actions">
            {itemExists ? (
                <Button
                    data-cy="remove-from-cart"
                    color="red"
                    size="md"
                    className="uppercase"
                    type="button"
                    onClick={() => handleRemove(game)}
                >
                    Remove from cart
                </Button>
            ) : (
                <Button
                    data-cy="add-to-cart"
                    color="primary"
                    size="md"
                    className="uppercase"
                    type="button"
                    onClick={() => handleAddGame(game)}
                >
                    Add to cart
                </Button>
            )}
        </footer>
    );
};
