import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fillmore Burger | Kochi, Kerala | Premium Handcrafted Smash Burgers",
  description: "Experience Kochi's finest gourmet double smash burgers, loaded fries, and craft milkshakes at Fillmore Burger. Handcrafted, fresh, and instagrammable.",
  keywords: "Fillmore Burger, Kochi, Kerala, Smash Burgers, Premium Restaurant, Kochi Food, Loaded Fries",
  openGraph: {
    title: "Fillmore Burger | Premium Handcrafted Smash Burgers",
    description: "Experience Kochi's finest gourmet double smash burgers, loaded fries, and craft milkshakes.",
    images: ["/images/hero_burger.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900 selection:bg-brand-yellow selection:text-brand-blue">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

