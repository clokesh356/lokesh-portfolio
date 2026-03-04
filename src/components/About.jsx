import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-20 px-6 bg-slate-800">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto"
            >
                <h3 className="text-3xl font-bold mb-6 text-cyan-400">About Me</h3>
                <p className="text-gray-300 leading-relaxed">
                    DevOps Engineer with 3 years of experience in architecting scalable, secure, and cost-optimized cloud solutions, automating CI/CD pipelines, and
                    managing Kubernetes-based workloads. Proficient in AWS, Docker, Terraform, Helm, and monitoring solutions such as Prometheus and Grafana.
                </p>
            </motion.div>
        </section>
    );
};

export default About;