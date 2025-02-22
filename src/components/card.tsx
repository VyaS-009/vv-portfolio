// src/components/card.tsx

import { NeonGradientCard } from "./magicui/neon-gradient-card";
import { motion } from "framer-motion";

const projects = [
  {
    title: "OptiCode",
    description:
      "AI-powered code analysis and optimization tool using Gemini 1.5 Flash.",
    link: "#",
  },
  {
    title: "AI Chatbot",
    description:
      "ChatGPT-like chatbot with document summarization and query handling.",
    link: "#",
  },
  {
    title: "Blockchain Air Quality",
    description:
      "Machine learning and blockchain integration for air quality forecasting.",
    link: "#",
  },
];

export const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <NeonGradientCard className="max-w-sm items-center justify-center text-center">
            <h3 className="text-4xl font-bold mb-2 text-white">
              {project.title}
            </h3>
            <p className="text-lg text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-[#00FF41] hover:text-[#008F11] transition-colors"
            >
              Learn More ➝
            </a>
          </NeonGradientCard>
        </motion.div>
      ))}
    </div>
  );
};
