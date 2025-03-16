import { Header } from "@/components/layout/header";
import { ROUTES } from "@/constants/route-constants";
import "@/app/styles/tw.css";

describe("Header component", () => {
    beforeEach(() => {
        cy.mount(<Header />);
    });

    it("renders the ContentBox container with correct Tailwind classes", () => {
        cy.get("div.bg-light-gray-1.px-6.py-5").should("exist");
    });

    it("renders a home link with an SVG logo", () => {
        cy.get("a")
            .first()
            .should("have.attr", "href", ROUTES.home)
            .within(() => {
                cy.get("svg")
                    .should("be.visible")
                    .and("have.attr", "width", "148")
                    .and("have.attr", "height", "26");
            });
    });
});
