"use client";

import type { Metadata } from "next";
import "./globals.css";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
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
        <FlickeringGrid
          className={cn(
            "fixed top-0 left-0 w-full h-full -z-20 [mask-image:radial-gradient(1000px_circle_at_center,black,transparent)]"
          )}
          // className="relative inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
          squareSize={6}
          gridGap={6}
          color="#00FF41"
          maxOpacity={0.5}
          flickerChance={0.1}
        />

        {/* Navbar */}
        <NavBar />

        {/* Page Content with Gradient Overlay */}
        <main className="relative z-10 w-full flex flex-col items-center space-y-20">
          {children}
        </main>

        {/* Black Radial Gradient Overlay */}
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
