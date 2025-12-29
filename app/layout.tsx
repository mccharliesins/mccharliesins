
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { SpotlightBackground } from "@/components/ui/spotlight-bg";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Venkateshwar Yadav | Full Stack Developer",
  description: "Portfolio of Venkateshwar Yadav - Full Stack Developer specializing in MERN, React Native, and AI Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans text-white antialiased selection:bg-purple-500/30 selection:text-purple-200`}
      >
        <SpotlightBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
