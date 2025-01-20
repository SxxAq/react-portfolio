import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "NoshNow",
    description:
      "Full-stack food ordering platform with admin panel and secure payments.",
    tech: "MERN Stack, Stripe, JWT, Multer",
    liveLink: "https://noshnow-frontend.onrender.com/",
    githubLink: "https://github.com/SxxAq/NoshNow",
  },
  {
    title: "Textify",
    description:
      "AI-powered transcription and translation app with Web Workers for efficient processing.",
    tech: "React, Xenova/Whisper, Web Workers, Tailwind CSS",
    liveLink: "https://textify-phi.vercel.app/",
    githubLink: "https://github.com/SxxAq/Textify",
  },
  {
    title: "Task Patrol Bot",
    description:
      "Discord bot for automating challenge verification and progress tracking.",
    tech: "Node.js, MongoDB, Discord.js",
    githubLink: "https://github.com/SxxAq/Discord-bot-automation",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <p className="text-sm text-gray-500 mb-4">{project.tech}</p>
            <div className="flex gap-4">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

