import React from "react";

const Experience = () => {
  return (
    <section className="py-20 px-6 bg-slate-800">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-cyan-400 mb-10">
          Professional Experience
        </h3>

        <div className="space-y-10 text-gray-300">

          <div>
            <h4 className="text-xl font-semibold">
              DevOps Engineer – Asterteq Ventures
            </h4>
            <p>Dec 2022 – Present</p>
            <p className="mt-2">
              Architected scalable AWS ECS/EKS infrastructure, implemented CI/CD pipelines,
              and optimized cloud cost by 25%.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">
              UnivIntel (IoT Fleet Monitoring)
            </h4>
            <p>
              Designed Kubernetes-based workloads with Prometheus monitoring.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">
              AI Bandobast (AI Event Governance Platform)
            </h4>
            <p>
              Built containerized ECS infrastructure with GitHub Actions automation.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;