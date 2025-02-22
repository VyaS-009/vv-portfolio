"use client";

import type { Metadata } from "next";
import "./globals.css";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { cn } from "@/lib/utils";
import NavBar from "@/components/nav-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background text-foreground">
        {/* Interactive Grid Pattern as Background */}
        <InteractiveGridPattern
          className={cn(
            "absolute  inset-0 -z-10 [mask-image:radial-gradient(800px_circle_at_center,black,transparent)]"
          )}
          width={20}
          height={20}
          squares={[80, 80]}
          squaresClassName="fill-[#003B00] hover:fill-[#00FF41] transition-colors duration-300"
        />

        {/* Navbar */}
        <NavBar />

        {/* Page Content */}
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
