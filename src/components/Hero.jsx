import React from "react";
import { Typewriter } from "react-simple-typewriter";
import LokeshReddyResume from "../assets/LokeshReddyResume.pdf";
import devopsBg from "../assets/devops-bg.png";

const Hero = () => {
  return (
    <section
      className="h-screen flex items-center justify-center text-center px-6 relative"
      style={{
        backgroundImage: `url(${devopsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-cyan-400">
            <Typewriter
              words={[
                "DevOps Engineer",
                "AWS Specialist",
                "CI/CD Builder",
                "Cloud Infrastructure Engineer",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          AWS | ECS | EKS | Fargate | Docker | CI/CD | Terraform | Kubernetes |
          Prometheus | Grafana | Jenkins | GitHub Actions | GitHub
        </p>
        <div className="flex justify-center gap-6 mt-8 text-4xl text-gray-300 flex-wrap hover:scale-125 transition duration-300">

          <i className="devicon-amazonwebservices-plain-wordmark colored"></i>

          <i className="devicon-docker-plain colored"></i>

          <i className="devicon-kubernetes-plain colored"></i>

          <i className="devicon-terraform-plain colored"></i>

          <i className="devicon-jenkins-line "></i>

          <i className="devicon-github-original"></i>

          <i className="devicon-prometheus-original colored"></i>

          <i className="devicon-grafana-original"></i>

        </div>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition"
          >
            View Projects
          </a>

          <a
            href={LokeshReddyResume}
            download
            className="border border-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;