// src/components/resume.tsx

import { motion } from "framer-motion";

const resumeItems = [
  {
    role: "Software Developer",
    company: "Sirian Overseas",
    duration: "2023 - Present",
    description:
      "Worked on AI, ML, and blockchain projects, including OptiCode and document summarization tools.",
  },
  {
    role: "AI/ML Intern",
    company: "Tech Solutions",
    duration: "2022 - 2023",
    description:
      "Developed NLP and OCR-based solutions for real-world applications in education and business.",
  },
];

const Resume = () => {
  return (
    <div className="space-y-8">
      {resumeItems.map((item, index) => (
        <motion.div
          key={item.role}
          className="bg-gray-800 p-6 rounded-lg shadow-lg text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white">{item.role}</h3>
          <p className="text-lg text-gray-400">
            {item.company} | {item.duration}
          </p>
          <p className="text-md text-gray-300 mt-2">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Resume;
