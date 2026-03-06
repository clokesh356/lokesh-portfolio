
import React from "react";
import { motion } from "framer-motion";

const pipeline = [
  "Developer",
  "GitHub",
  "GitHub Actions",
  "Docker Build",
  "Amazon ECR",
  "ECS / EKS Deploy",
  "Users"
];

const Pipeline = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h3 className="text-3xl font-bold mb-12 text-cyan-400">
          DevOps CI/CD Pipeline
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">

          {pipeline.map((step, index) => (
            <React.Fragment key={index}>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-slate-800 border border-slate-700
                px-6 py-4 rounded-xl text-white font-semibold
                hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20
                transition"
              >
                {step}
              </motion.div>

              {index !== pipeline.length - 1 && (
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-cyan-400 text-2xl"
                >
                  →
                </motion.div>
              )}

            </React.Fragment>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Pipeline;
