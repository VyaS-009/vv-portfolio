// src/app/home.tsx

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/card"; // Example project card component
import Resume from "@/components/resume"; // Resume component
import Certifications from "@/components/certifications"; // Certifications component

const Home = () => {
  useEffect(() => {
    document.body.style.overflow = "auto";
    document.documentElement.style.scrollBehavior = "smooth"; // Enable smooth scrolling
  }, []);

  return (
    <div className="justify-center min-h-screen bg-transparent">
      <main className="px-8 py-5 space-y-16 pt-0 text-center">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center pt-0"
        >
          <h2 className="text-4xl mb-4 text-white">Hey, I'm</h2>
          <motion.h2
            className="text-8xl font-bold font-pixel text-[#008F11] hover:text-[#00FF41]"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
          >
            Vedavyas Viswanatham
          </motion.h2>

          <motion.p
            className="text-xl mt-4 w-full mx-auto pt-4 text-white"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5 }}
          >
            I'm a versatile software developer based in Andhra Pradesh, India!
            I’m passionate about creating things that live on the internet—
            whether it’s dynamic websites, robust applications, or innovative
            AI-driven solutions. <br />
            <br />
            My expertise spans frontend, backend, blockchain, and AI/ML
            development, with a focus on building scalable and high-performance
            applications. With hands-on experience in technologies like React,
            Next.js, TypeScript, FastAPI, Node.js, Docker, Kubernetes, and AWS.
            <br />
            <br />I love blending clean design with powerful functionality. I’ve
            developed AI-powered tools using NLP, OCR, and chatbots, and have
            also dabbled in blockchain development with Solidity and Web3.js. I
            enjoy taking on new challenges, learning from every project, and
            delivering impactful digital experiences. Let’s build something
            great together!
          </motion.p>

          <a
            href="#contact"
            className="inline-block mt-8 text-2xl text-[#008F11] hover:text-[#00FF41] transition-colors"
          >
            Say hi ➝
          </a>
        </section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="min-h-screen flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-5xl font-bold text-white mb-8">Projects</h2>
          <Card />
        </motion.section>

        {/* Resume Section */}
        <motion.section
          id="resume"
          className="min-h-screen flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-5xl font-bold text-white mb-8">Resume</h2>
          <Resume />
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          id="certifications"
          className="min-h-screen flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-5xl font-bold text-white mb-8">Certifications</h2>
          <Certifications />
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="min-h-screen flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-5xl font-bold text-white mb-8">Contact Me</h2>
          <p className="text-xl text-white">
            Feel free to reach out for collaborations or just a friendly chat!
          </p>
        </motion.section>
      </main>
    </div>
  );
};

export default Home;
