"use client";

import { formatPrice } from "@/utils/utils";
import { useCartSummary } from "./hooks/use-cart-summary";
import { Button } from "@/components/ui/button";

export const CartSummary = () => {
    const { games, total } = useCartSummary();

    return (
        <div className="col-span-1">
            <div className="px-6 py-8 rounded-lg border border-card/50">
                <header className="flex flex-col gap-3 mb-[30px]">
                    <h1 className="text-2xl font-bold text-foreground tracking-[0.5px]">
                        Order summary
                    </h1>
                    <span className="text-lg font-normal text-foreground tracking-[0.5px]">
                        {games.length} items
                    </span>
                </header>

                <ul className="border-b border-card/50 py-5">
                    {games.map((game) => (
                        <li
                            key={game.id}
                            className="flex justify-between items-center text-lg font-normal text-foreground pb-[14.5px] tracking-1"
                        >
                            <span>{game.name}</span>
                            <span>{formatPrice(game.price)}</span>
                        </li>
                    ))}
                </ul>

                <footer className="pt-6 flex justify-between items-center">
                    <span className="font-bold text-xl text-foreground">
                        Order Total
                    </span>
                    <span className="font-bold text-xl text-foreground">
                        {formatPrice(total)}
                    </span>
                </footer>
            </div>

            <footer className="mt-8">
                <Button color="secondary" size="md" className="text-base">
                    Checkout
                </Button>
            </footer>
        </div>
    );
};
