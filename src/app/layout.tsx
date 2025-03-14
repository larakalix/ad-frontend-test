import type { Metadata } from "next";

import { Archivo } from "next/font/google";
import { Toaster } from "sonner";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { cn } from "@/utils/utils";

import "./globals.css";
import { ContentBox } from "@/components/layout/common/content-box";
import { QueryProvider } from "@/providers/query-provider";

const font = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Apply Digital Test",
    description: "Frontend development test for Apply Digital",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <QueryProvider>
            <html lang="en">
                <body className={cn(font.className, "flex flex-col h-screen")}>
                    <Toaster richColors />

                    <Header />

                    <ContentBox outerClassName="px-6 py-12 flex flex-1 m-auto w-full">
                        {children}
                    </ContentBox>

                    <Footer />
                </body>
            </html>
        </QueryProvider>
    );
}
