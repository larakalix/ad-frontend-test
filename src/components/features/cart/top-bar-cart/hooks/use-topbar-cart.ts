import { useCartStore } from "@/stores/cart-store";
import React from "react";

export const useTopbarCart = () => {
    const { games } = useCartStore((state) => state);

    return { games };
};
