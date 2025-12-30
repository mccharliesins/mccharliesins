
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { SpotlightBackground } from "@/components/ui/spotlight-bg";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Venkateshwar Yadav | GenAI & Full Stack Developer",
  description: "Portfolio of Venkateshwar Yadav - GenAI & Python Developer specializing in Autonomous Agents, RAG Systems, and Scalable Web Apps.",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${outfit.variable} font-sans text-white antialiased selection:bg-purple-500/30 selection:text-purple-200`}
      >
        <SpotlightBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
