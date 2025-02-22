"use client";

import React from "react";
import Link from "next/link";
import {
  HomeIcon,
  CalendarIcon,
  MailIcon,
  PencilIcon,
  ContactIcon,
  NotepadText,
} from "lucide-react";

import ModeToggle from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "./magicui/dock";

export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  home: (props: IconProps) => <HomeIcon {...props} />,
  calendar: (props: IconProps) => <CalendarIcon {...props} />,
  resume: (props: IconProps) => <NotepadText {...props} />,
  contact: (props: IconProps) => <ContactIcon {...props} />,
};

const NAV_ITEMS = [
  { href: "/", icon: Icons.home, label: "Home" },
  { href: "/projects", icon: Icons.calendar, label: "Projects" },
  { href: "/resume", icon: Icons.resume, label: "Resume" },
  { href: "/contact", icon: Icons.contact, label: "Contact" },
];

export function NavBar() {
  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-center w-full p-4 pt-2 pb-0 
                 bg-transparent backdrop-glass-md  "
    >
      {/* <div className="flex items-center space-x-4">
        <Link
          href="/"
          className="text-xl font-bold text-gray-900 dark:text-white"
        >
          V.V
        </Link>
      </div> */}

      <div className="flex items-center space-x-6">
        <TooltipProvider>
          <Dock className="border-2 border-[#003B00] rounded-lg p-2">
            {NAV_ITEMS.map((item) => (
              <Tooltip key={item.label}>
                <TooltipTrigger asChild>
                  <DockIcon asChild>
                    <Link href={item.href} aria-label={item.label}>
                      {React.createElement(item.icon, {
                        className:
                          //   "w-6 h-6 text-gray-700 dark:text-gray-200 hover:text-blue-500",
                          "w-6 h-6 text-[#008F11] transition-colors " +
                          "hover:text-[#00FF41]",
                      })}
                    </Link>
                  </DockIcon>
                </TooltipTrigger>
                <TooltipContent>{item.label}</TooltipContent>
              </Tooltip>
            ))}
          </Dock>
        </TooltipProvider>

        {/* <Separator orientation="vertical" className="h-6" />
        <ModeToggle /> */}
      </div>
    </nav>
  );
}

export default NavBar;
