// src/app/home.tsx

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/card"; // Example project card component
import Resume from "@/components/resume"; // Resume component
import Certifications from "@/components/certifications"; // Certifications component
import { HyperText } from "@/components/magicui/hyper-text";
import { TechStack } from "@/components/tech-stack";
import { Contact } from "@/components/contact";

const Home = () => {
  useEffect(() => {
    document.body.style.overflow = "auto";
    document.documentElement.style.scrollBehavior = "smooth"; // Enable smooth scrolling
  }, []);

  return (
    <div className="justify-center min-h-screen bg-transparent overflow-hidden">
      <main className="px-8 py-auto space-y-4 pt-0 text-center">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-[80vh] flex flex-col justify-center pt-0"
        >
          <h2 className="text-4xl mb-4 text-white">Hey, I'm</h2>
          <motion.h2
            className="text-8xl font-bold font-pixel text-[#008F11] hover:text-[#00FF41]"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
          >
            <HyperText>Vedavyas Viswanatham</HyperText>
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
          className="min-h-[80vh] flex flex-col justify-center items-center py-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-5xl font-bold text-white mb-20 ">Projects</h2>
          <Card />
        </motion.section>

        {/* Resume Section */}
        <motion.section
          id="resume"
          className="min-h-[80vh] flex flex-col justify-center items-center py-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-5xl font-bold text-white mb-20">Resume</h2>
          <Resume />
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section
          id="tech-stack"
          className="min-h-[80vh] flex flex-col justify-center items-center py-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-5xl font-bold text-white mb-20 ">Tech Stack</h2>
          <TechStack />
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          id="certifications"
          className="min-h-[80vh] flex flex-col justify-center items-center py-0 gap-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-5xl font-bold text-white mb-0">Certifications</h2>
          <Certifications />
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="min-h-[80vh] flex flex-col justify-center items-center pt-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-5xl font-bold text-white mb-10">Contact Me</h2>
          <p className="text-xl text-white">
            Feel free to reach out for collaborations or just a friendly chat!
          </p>
          <Contact />
        </motion.section>
      </main>
    </div>
  );
};

export default Home;
