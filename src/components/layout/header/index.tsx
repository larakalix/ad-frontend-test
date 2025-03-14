import Link from "next/link";
import { TopbarCart } from "@/components/features/cart/top-bar-cart";
import { ContentBox } from "../common/content-box";
import { ROUTES } from "@/constants/route-constants";

export const Header = () => {
    return (
        <ContentBox outerClassName="bg-light-gray-1 px-6 py-5">
            <>
                <Link href={ROUTES.home}>
                    <span className="text-2xl font-bold text-dark-gray-1 tracking-[0.4px]">
                        GamerShop
                    </span>
                </Link>

                <TopbarCart />
            </>
        </ContentBox>
    );
};
