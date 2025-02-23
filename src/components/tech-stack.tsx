"use client";

import { useTheme } from "next-themes";
import { MagicCard } from "@/components/magicui/magic-card";

// Importing Icons from React Icons
import {
  SiPython,
  SiTypescript,
  SiSolidity,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiWeb3Dotjs,
  SiNextdotjs,
  SiFastapi,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";

import { FaAws } from "react-icons/fa";

const techStacks = [
  { name: "Python", icon: <SiPython /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Solidity", icon: <SiSolidity /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React.js", icon: <SiReact /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Web3.js", icon: <SiWeb3Dotjs /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "AWS", icon: <FaAws /> },
];

export function TechStack() {
  const { theme } = useTheme();

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-6 w-full">
      {techStacks.map((tech) => (
        <MagicCard
          key={tech.name}
          className="flex flex-col items-center justify-center p-4 cursor-pointer space-y-2"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <div className="text-6xl text-[#ffffff] p-2">{tech.icon}</div>
          <div className="text-lg font-semibold text-[#00FF41]">
            {tech.name}
          </div>
        </MagicCard>
      ))}
    </div>
  );
}
