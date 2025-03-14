import { ShoppingCart } from "lucide-react";
import { ContentBox } from "../common/content-box";

export const Header = () => {
    return (
        <ContentBox outerClassName="bg-light-gray-1 px-6 py-5">
            <>
                <span className="text-2xl font-bold text-dark-gray-1">
                    GamerShop
                </span>

                <span>
                    <ShoppingCart className="text-title" size={20} />
                </span>
            </>
        </ContentBox>
    );
};
