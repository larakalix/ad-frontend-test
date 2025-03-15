"use client";

import Link from "next/link";

import { useTopbarCart } from "./hooks/use-topbar-cart";
import { ShoppingCart } from "@/components/icons/shopping-cart";
import { ROUTES } from "@/constants/route-constants";

export const TopbarCart = () => {
    const { games } = useTopbarCart();

    return (
        <Link href={ROUTES.cart} className="flex gap-1">
            <ShoppingCart className="text-title" width={20} height={20} />

            <span className="text-sm font-semibold text-dark-gray-1">
                {games.length}
            </span>
        </Link>
    );
};
