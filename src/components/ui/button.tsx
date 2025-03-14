import type { ComponentProps, PropsWithChildren } from "react";

import { tv } from "tailwind-variants";
import { cn } from "@/utils/utils";

const button = tv({
    base: "px-6 py-5 text-base rounded-lg font-bold  transition-colors",
    variants: {
        color: {
            primary:
                "bg-white text-foreground border border-foreground hover:bg-light-gray-1",
            secondary: "bg-dark-gray-1 text-white border border-foreground hover:bg-dark-gray-2",
        },
        size: {
            sm: "text-sm",
            md: "text-base",
            lg: "px-4 py-3 text-lg",
        },
        width: {
            full: "w-full",
            auto: "w-auto",
            fit: "w-fit",
        },
    },
    defaultVariants: {
        size: "md",
        color: "primary",
        width: "full",
    },
});

type ButtonProps = PropsWithChildren<
    ComponentProps<typeof button> & {
        size: "sm" | "md" | "lg";
        color: "primary" | "secondary";
        width?: "full" | "auto" | "fit";
    }
>;

export const Button = ({
    color,
    size,
    children,
    className,
    width = "full",
    ...props
}: ButtonProps) => {
    return (
        <button
            {...props}
            className={cn(
                button.base,
                button({ size, color, width }),
                className
            )}
        >
            {children}
        </button>
    );
};
