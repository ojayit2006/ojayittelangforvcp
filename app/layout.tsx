import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundLayer from "@/components/BackgroundLayer";
import { candidate } from "@/data/content";

export const metadata: Metadata = {
  title: `${candidate.name} | ${candidate.tagline}`,
  description: `${candidate.name}'s campaign for Vice Chairperson of ${candidate.society}, ${candidate.selectionYear}.`,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-bg text-text">
        <BackgroundLayer />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <div className="relative z-10">
          <Footer />
        </div>
      </body>
    </html>
  );
}
