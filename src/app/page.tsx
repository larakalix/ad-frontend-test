import type { GameProps } from "@/services/games/types";

import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryInstance } from "@/utils/query-client";
import { gameQueryConfig } from "@/services/games/query-config";
import { ProductView } from "@/views/product-view";

export default async function Home({
    searchParams: { genre = "" },
}: {
    searchParams: GameProps;
}) {
    const client = getQueryInstance({
        staleTimeMinutes: 10,
    });
    await client.prefetchQuery(gameQueryConfig({ genre }));

    return (
        <HydrationBoundary state={dehydrate(client)}>
            <ProductView genre={genre} />
        </HydrationBoundary>
    );
}
