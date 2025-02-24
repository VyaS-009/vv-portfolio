"use client";

import { motion } from "framer-motion";
import { ShineBorder } from "@/components/magicui/shine-border";

const certifications = [
  {
    title: "Blockchain Basics",
    provider: "LinkedIn Learning",
    date: "Jun 2024",
    link: "https://www.linkedin.com/learning/blockchain-basics",
  },
  {
    title: "Blockchain Beyond the Basics",
    provider: "LinkedIn Learning",
    date: "Jun 2024",
    link: "https://www.linkedin.com/learning/blockchain-beyond-the-basics",
  },
  {
    title: "Learning the JavaScript Language",
    provider: "LinkedIn Learning",
    date: "Jun 2024",
    link: "https://www.linkedin.com/learning/learning-the-javascript-language",
  },
  {
    title: "AI for Everyone",
    provider: "edX",
    date: "Apr 2024",
    link: "https://www.edx.org/course/ai-for-everyone",
  },
];

const Certifications = () => {
  return (
    <div className="flex min-h-screen items-center justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8  w-full max-w-6xl">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            className="relative p-6 rounded-lg shadow-lg bg-transparent 
                       flex flex-col items-start justify-between text-left 
                      overflow-hidden
                       w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Shine Border Wrapper */}
            <ShineBorder
              className="absolute inset-0 rounded-xl z-[-1]"
              color={["#0D0208", "#003B00", "#008F11"]}
            />

            {/* Certificate Details */}
            <div className="w-full">
              <h3 className="text-2xl font-bold text-[#00FF41] mb-2 break-words">
                {cert.title}
              </h3>
              <p className="text-lg text-gray-400">{cert.provider}</p>
              <p className="text-md text-gray-300 mt-2 mb-4">{cert.date}</p>
            </div>

            {/* Show Credentials Button */}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 mt-auto border-2 border-[#008F11] text-[#008F11] 
                         font-semibold rounded-xl transition-all
                         hover:bg-[#] hover:text-[#00FF41]"
            >
              Show Credentials
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
