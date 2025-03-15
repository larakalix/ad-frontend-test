import type { ComponentProps, PropsWithChildren } from "react";

import { tv } from "tailwind-variants";
import { cn } from "@/utils/utils";

const badge = tv({
    base: "px-3 py-2 font-normal text-base tracking-1 transition-colors rounded",
    variants: {
        color: {
            primary: "bg-light-gray-2 text-foreground",
            secondary:
                "bg-dark-gray-1 text-white border border-foreground hover:bg-dark-gray-2",
        },
    },
    defaultVariants: {
        color: "primary",
    },
});

export type BadgeProps = PropsWithChildren<
    ComponentProps<"div"> & {
        color: "primary" | "secondary";
    }
>;

export const Badge = ({ className, color, children, ...props }: BadgeProps) => {
    return (
        <div {...props} className={cn(badge.base, badge({ color }), className)}>
            {children}
        </div>
    );
};
