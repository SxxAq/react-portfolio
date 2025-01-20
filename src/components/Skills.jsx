import React from "react";
import { motion } from "framer-motion";
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiPrisma,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiFirebase,
  SiPostgresql,
  SiCplusplus,
  SiLinux,
  SiMongodb,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

const Skills = () => {
  const skills = [
    {
      category: "Languages",
      items: [
        { name: "C/C++", icon: <SiCplusplus /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "SQL", icon: <FaDatabase /> },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "React", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Prisma", icon: <SiPrisma /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Mongoose", icon: <SiMongodb /> },
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <SiGithub /> },

        { name: "Firebase", icon: <SiFirebase /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Linux", icon: <SiLinux /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">
              {category.category}
            </h3>
            <div className="grid grid-cols-3 gap-6">
              {category.items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="text-3xl text-gray-700">{skill.icon}</div>
                  <span className="text-sm text-gray-600 text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
