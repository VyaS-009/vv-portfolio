"use client";

import type { Metadata } from "next";
import "./globals.css";

import { cn } from "@/lib/utils";
import NavBar from "@/components/nav-bar";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-x-hidden bg-background text-foreground">
        {/* Flickering Grid - Responsive */}
        <FlickeringGrid
          className={cn(
            "fixed top-0 left-0 w-full h-full -z-20",
            "sm:[mask-image:radial-gradient(600px_circle_at_center,black,transparent)]",
            "md:[mask-image:radial-gradient(1000px_circle_at_center,black,transparent)]"
          )}
          squareSize={6}
          gridGap={6}
          color="#00FF41"
          maxOpacity={0.5}
          flickerChance={0.1}
        />

        {/* Navbar - Responsive Padding */}
        <div className=" sticky top-0 z-50 w-full px-4 md:px-8">
          <NavBar />
        </div>

        {/* Page Content with Responsive Spacing */}
        <main className="relative z-10 w-full flex flex-col items-center space-y-12 sm:space-y-16 md:space-y-20">
          {children}
        </main>

        {/* Black Radial Gradient Overlay (unchanged) */}
        <div
          className="fixed inset-0 -z-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(1500px circle at center, rgba(0, 0, 0, 0.8), transparent)",
          }}
        />
      </body>
    </html>
  );
}
