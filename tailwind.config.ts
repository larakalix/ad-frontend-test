import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                card: "#8F8F8F",
                "light-border-1": "#EFEDF3",
                subtitle: "#737373",
                foreground: "#3B3B3B",
                "dark-gray-1": "#585660",
                "dark-gray-2": "#404040",
                "light-gray-1": "#EEEEEE",
            },
            letterSpacing: {
                "1": "0.4px",
            },
        },
    },
    plugins: [],
};
export default config;
