"use client";

import { motion } from "framer-motion";
import { ShineBorder } from "@/components/magicui/shine-border";

const experience = {
  role: "Software Developer Intern",
  company: "Parabola9",
  duration: "Dec 2024 – Present",
  location: "Nuzvid, Andhra Pradesh",
  description: [
    "Developed interactive and scalable user interfaces using React, TypeScript, and Next.js, enhancing page load speed by 30% and improving user engagement.",
    "Optimized API integration and state management, reducing API response time by 25% and increasing data consistency.",
    "Implemented Agile methodologies with Jira Workflow, improving team efficiency and accelerating project delivery.",
  ],
};

const Resume = () => {
  return (
    <div className="flex flex-col justify-center  md:flex-row items-start min-h-screen p-4 pt-0 pb-0 gap-8">
      {/* Left: Resume Image/PDF Display */}
      <ShineBorder
        className="relative w-full md:w-1/2 h-full rounded-lg"
        color={["#0D0208", "#003B00", "#008F11"]}
      >
        <motion.div
          className="w-full h-full bg-gray-800 rounded-lg shadow-lg "
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/Resume_upscaled.jpeg"
            alt="Resume"
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>
      </ShineBorder>

      {/* Right: Experience Section and Download Button */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <motion.div
          className="w-full bg-transparent p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-[#00FF41]">
            {experience.role}
          </h3>
          <p className="text-lg text-gray-400">
            {experience.company} | {experience.duration}
          </p>
          <p className="text-md text-gray-400 mb-4">{experience.location}</p>
          <ul className="list-disc pl-5 space-y-2">
            {experience.description.map((point, index) => (
              <li key={index} className="text-md text-gray-300">
                {point}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          className="flex justify-start px-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <ShineBorder
            className="relative inline-block rounded-lg p-[3px] whitespace-nowrap"
            color={["#0D0208", "#003B00", "#008F11"]}
          >
            <a
              href="/Resume.pdf"
              download="Resume.pdf"
              className="flex items-center justify-center bg-transparent text-white text-sm px-2 py-3 rounded-lg hover:text-[#00FF41] transition-colors duration-200"
            >
              Download Resume
            </a>
          </ShineBorder>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
