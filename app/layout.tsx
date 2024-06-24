import Provider from '@/context/Provider';
import Footer from './components/footer';
import Header from './components/header';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "& BLOG",
    description: "Tony Hector Lenaig",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div>< Header /></div>
                <Provider session>
                {children}
                </Provider>
                <div>< Footer /></div>
            </body>
        </html >
    );
}
