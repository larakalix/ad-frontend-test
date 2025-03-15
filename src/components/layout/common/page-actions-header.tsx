import Link from "next/link";
import { ArrowLeft } from "@/components/icons/arrow-left";

export const PageActionsHeader = () => {
    return (
        <nav className="pb-20 mt-[-20px]">
            <ul className="flex gap-4">
                <li>
                    <Link
                        href="/"
                        className="font-medium text-base tracking-normal text-foreground flex items-center gap-x-3"
                    >
                        <ArrowLeft />
                        Back to Catalog
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
