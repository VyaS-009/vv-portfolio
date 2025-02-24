"use client";

import { useTheme } from "next-themes";
import { MagicCard } from "@/components/magicui/magic-card";

// Importing Icons from React Icons

import { MdOutlineEmail } from "react-icons/md";
import { PiLinkedinLogoThin } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";

const socials = [
  {
    name: "Email",
    icon: <MdOutlineEmail />,
    link: "mailto:vedavyas9990@gmail.com",
  },
  {
    name: "Linkedin",
    icon: <PiLinkedinLogoThin />,
    link: "https://www.linkedin.com/in/vedavyas-viswanatham-3769a2219/",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/VyaS-009",
  },
];

export function Contact() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-wrap justify-center items-center gap-10 w-full">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicCard
            key={social.name}
            className="flex flex-col items-center justify-center p-4 cursor-pointer space-y-2"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >
            <div className="text-6xl text-[#ffffff] p-2">{social.icon}</div>
            <div className="text-lg font-semibold text-[#00FF41]">
              {social.name}
            </div>
          </MagicCard>
        </a>
      ))}
    </div>
  );
}
