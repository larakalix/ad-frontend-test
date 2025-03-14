import { CartGrid } from "@/components/features/cart/grid";
import { CartSummary } from "@/components/features/cart/summary";
import { PageActionsHeader } from "@/components/layout/common/page-actions-header";
import React from "react";

export const CartView = () => {
    return (
        <div className="flex flex-col w-full">
            <PageActionsHeader />

            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
                <CartGrid />

                <CartSummary />
            </div>
        </div>
    );
};
