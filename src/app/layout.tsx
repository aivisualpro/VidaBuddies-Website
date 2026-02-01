import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vida Buddies - Premium Fruit Purees",
  description: "Experience the freshest, 100% natural fruit purees and concentrates. Superior quality for breweries, bakeries, and beverage manufacturers.",
  icons: {
    icon: "/favicon.png",
  },
};


import Navbar from "@/components/layout/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          inter.variable,
          outfit.variable,
          "min-h-screen bg-background font-sans antialiased selection:bg-primary selection:text-primary-foreground"
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
