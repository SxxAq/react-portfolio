import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Web Developer Intern",
    company: "Acceptare Technology Pvt Ltd",
    location: "Remote",
    period: "Nov 2024 – Jan 2025",
    description: [
      "Developed scalable web applications using modern web technologies",
      "Implemented role-based access control and authentication",
      "Optimized backend queries using Prisma and PostgreSQL",
      "Designed and deployed responsive websites with CMS integration",
      "Collaborated with teams using Agile methodologies",
    ],
    tech: "TypeScript, React, Node.js, Express, Prisma, PostgreSQL, Tailwind CSS",
  },
  {
    title: "Open Source Contributor",
    company: "Social Winter of Code",
    location: "Remote",
    period: "Jan 2023 – Mar 2023",
    description: [
      "Contributed to Frontend repositories",
      "Implemented new features and UI improvements",
      "Collaborated with other developers through pull requests",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-lg p-6 shadow-md"
          >
            <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
            <div className="flex flex-wrap gap-4 mt-2 text-gray-600">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {exp.period}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {exp.location}
              </span>
            </div>
            <div className="mt-4">
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            {exp.tech && (
              <div className="mt-4 text-sm text-gray-600">
                <strong>Tech Stack:</strong> {exp.tech}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
