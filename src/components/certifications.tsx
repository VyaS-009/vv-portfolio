// src/components/certifications.tsx

import { motion } from "framer-motion";

const certifications = [
  {
    title: "Generative AI Training",
    provider: "OpenAI Academy",
    date: "Dec 2024",
  },
  {
    title: "AWS Certified Solutions Architect",
    provider: "Amazon Web Services",
    date: "Jan 2025",
  },
  {
    title: "Blockchain Development",
    provider: "Ethereum Foundation",
    date: "Nov 2024",
  },
];

const Certifications = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {certifications.map((cert, index) => (
        <motion.div
          key={cert.title}
          className="bg-gray-800 p-6 rounded-lg shadow-lg text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white">{cert.title}</h3>
          <p className="text-lg text-gray-400">{cert.provider}</p>
          <p className="text-md text-gray-300 mt-2">{cert.date}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Certifications;
