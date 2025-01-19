import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gray-50 p-8 rounded-lg shadow-md max-w-2xl mx-auto"
      >
        <p className="text-center text-gray-600 mb-8">
          Feel free to reach out for collaborations or just a friendly chat.
        </p>
        <div className="flex flex-col items-center gap-6">
          <a
            href="mailto:aqueel192@gmail.com"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <Mail size={20} />
            aqueel192@gmail.com
          </a>
          <div className="flex gap-6">
            <SocialLink
              href="https://github.com/SxxAq"
              icon={<Github size={24} />}
            />
            <SocialLink
              href="https://linkedin.com/in/saalim-aqueel"
              icon={<Linkedin size={24} />}
            />
            <SocialLink
              href="https://twitter.com/__0xSaalim"
              icon={<Twitter size={24} />}
            />
          </div>
        </div>
      </motion.div>
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

export default Contact;

