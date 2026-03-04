import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "AWS", level: 90 },
  { name: "Docker", level: 85 },
  { name: "CI/CD", level: 88 },
  { name: "Terraform", level: 75 },
  { name: "Kubernetes", level: 70 },
];

const Skills = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-cyan-400">Skills</h3>

        {skills.map((skill, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between mb-2">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="w-full bg-slate-700 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
                className="bg-cyan-500 h-3 rounded-full"
              />
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;