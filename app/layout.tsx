import "./globals.css";
import { NextAuthSessionProvider } from "@/components/SessionProvider";
import { QueryProvider } from "@/network";
import Provider from "./GlobalRedux/provider";
export const metadata = {
    title: "Instagram",
    description: "Best social network",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="relative">
                <NextAuthSessionProvider>
                    <QueryProvider>
                        <Provider>{children}</Provider>
                    </QueryProvider>
                </NextAuthSessionProvider>
            </body>
        </html>
    );
}
