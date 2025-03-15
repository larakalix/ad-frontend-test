import type { GameProps } from "@/services/games/types";

import { usePathname, useRouter } from "next/navigation";
import { useFilterStore } from "@/stores/filter-store";

export const useGameFilter = ({ genre = "" }: GameProps) => {
    const pathname = usePathname();
    const router = useRouter();
    const { filters } = useFilterStore((state) => state);

    const handleChange = (value: string) => {
        const route = `${pathname}?${new URLSearchParams({
            genre: value,
        }).toString()}`;

        router.push(route);
    };

    return { filters, handleChange };
};
