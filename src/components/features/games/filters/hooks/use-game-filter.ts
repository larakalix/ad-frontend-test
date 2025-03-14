import { usePathname, useRouter } from "next/navigation";
import { useFilterStore } from "@/stores/filter-store";

export const useGameFilter = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { filters } = useFilterStore((state) => state);

    const handleChange = (value: string) => {
        const route = `${pathname}?${new URLSearchParams({
            genre: value.toLowerCase(),
        }).toString()}`;

        router.push(route);
    };

    return { filters, handleChange };
};
