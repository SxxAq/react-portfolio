import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section id="home" className="py-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "Web Developer",
              2000,
              "AI Enthusiast",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-xl text-gray-600 mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hi, I'm Saalim Aqueel
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            A passionate developer dedicated to building high-quality, scalable
            web applications. Currently working as a Web Developer Intern at
            Acceptare Technology Pvt Ltd.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/resume.pdf"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Download CV
            </a>
            <div className="flex gap-4">
              <SocialLink href="https://github.com/SxxAq" icon={<Github />} />
              <SocialLink
                href="https://linkedin.com/in/saalim-aqueel"
                icon={<Linkedin />}
              />
              <SocialLink
                href="https://twitter.com/__0xSaalim"
                icon={<Twitter />}
              />
              <SocialLink href="mailto:aqueel192@gmail.com" icon={<Mail />} />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block"
        >
          <img
            src="/placeholder.svg?height=400&width=400"
            alt="Profile"
            className="rounded-full w-80 h-80 mx-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-gray-900 transition-colors"
  >
    {icon}
  </a>
);

export default Hero;
