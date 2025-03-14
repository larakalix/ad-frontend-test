import { useCartStore } from "@/stores/cart-store";

export const useCartGrid = () => {
    const { games } = useCartStore((state) => state);

    return { games };
};
