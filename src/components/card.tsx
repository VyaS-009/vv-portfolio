// src/components/card.tsx

import { motion } from "framer-motion";
import { ShineBorder } from "@/components/magicui/shine-border";

const projects = [
  {
    title: "OptiCode",
    description:
      "AI-powered code analysis and optimization tool using Gemini 1.5 Flash.",
    link: "https://github.com/VyaS-009/OptiCode",
  },
  {
    title: "Doc-Chat",
    description:
      "ChatGPT-like chatbot with document summarization and query handling.",
    link: "#",
  },
  {
    title: "CertiFier",
    description: "Issues Certificates as NFT on Blockchain.",
    link: "#",
  },
];

export const Card = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 w-full max-w-6xl">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative p-6 rounded-lg shadow-lg bg-transparent flex flex-col 
                     items-start justify-between text-left overflow-hidden"
        >
          {/* Shine Border Wrapper */}
          <ShineBorder
            className="absolute inset-0 rounded-xl z-[-1]"
            color={["#0D0208", "#003B00", "#008F11"]}
          />

          {/* Project Details */}
          <h3 className="text-2xl md:text-3xl font-bold text-[#00FF41] mb-2 break-words">
            {project.title}
          </h3>
          <p className="text-base md:text-lg text-gray-300 mb-4">
            {project.description}
          </p>

          {/* Learn More Link */}
          <a
            href={project.link}
            className="text-[#008F11] hover:text-[#00FF41] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More ➝
          </a>
        </motion.div>
      ))}
    </div>
  );
};
