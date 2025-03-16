import { Footer } from "@/components/layout/footer";
import { ROUTES } from "@/constants/route-constants";
import "@/app/styles/tw.css";

describe("Footer component", () => {
    beforeEach(() => {
        cy.mount(<Footer />);
    });

    it("renders the outer ContentBox container with correct Tailwind classes", () => {
        cy.get("div.bg-dark-gray-2.text-center.px-6.py-16").should("exist");
    });

    it("renders the inner ContentBox container with correct Tailwind classes", () => {
        cy.get("div.flex.justify-center").should("exist");
    });

    it("renders a home link with an SVG logo", () => {
        cy.get("a")
            .should("have.attr", "href", ROUTES.home)
            .within(() => {
                cy.get("svg")
                    .should("be.visible")
                    .and("have.attr", "viewBox", "0 0 887 216")
                    .and("have.class", "w-[170px]")
                    .and("have.class", "m-auto");
            });
    });

    it("renders the SVG with expected path elements", () => {
        cy.get("a").find("svg").find('path[fill="white"]').should("exist");
    });
});
