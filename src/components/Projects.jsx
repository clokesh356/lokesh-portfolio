import React, { useState } from "react";
import { motion } from "framer-motion";
import aiBandobast from "../assets/aiBandobast.png";
import univintel from "../assets/univintel.png";

const Projects = () => {
    const [active, setActive] = useState(null);

    const toggleProject = (name) => {
        setActive(active === name ? null : name);
    };

    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-3xl font-bold mb-10 text-cyan-400">
                    Projects
                </h3>

                {/* ================= UnivIntel ================= */}
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="mb-8 bg-slate-800 rounded-xl border border-slate-700 p-6
  hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20
  cursor-pointer"
                >
                    <div
                        className="cursor-pointer"
                        onClick={() => toggleProject("univintel")}
                    >
                        <h4 className="text-xl font-semibold flex justify-between items-center">
                            UnivIntel – IoT Fleet Monitoring
                            <span className="text-cyan-400">→</span>
                        </h4>
                        <p className="text-gray-400 mt-2">
                            Kubernetes (EKS) based scalable IoT monitoring platform.
                        </p>
                    </div>

                    {active === "univintel" && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mt-6 space-y-6"
                        >


                            <div className="text-gray-300 space-y-3">
                                <p className="font-bold">UnivIntel is an IoT-based fleet monitoring platform designed to track trucks in real time and monitor vehicle sensor data for operational safety and
                                    efficiency
                                </p>
                                <p>• Architected and maintained scalable cloud infrastructure on AWS by leveraging services such as EC2, ECS/EKS, S3, RDS, and Load Balancers.
                                    Implemented high-availability designs using multi-AZ deployments, auto-scaling policies, and health checks. Optimized infrastructure cost through
                                    right-sizing resources, lifecycle policies, and budget monitoring while ensuring performance and security compliance
                                </p>
                                <p>• Created end-to-end CI/CD workflows using GitHub Actions to automate code builds, unit testing, Docker image creation, and deployment to staging
                                    and production environments. Integrated secure secrets management, environment variables, and branch-based triggers to ensure reliable and
                                    repeatable releases. Reduced manual intervention and deployment time while improving delivery consistency and quality.</p>
                                <p>• Containerized applications using Docker with optimized multi-stage builds and maintained versioned images in container registries such as AWS ECR.
                                    Deployed and managed workloads on Kubernetes clusters (EKS) by configuring Deployments, Services, Ingress, ConfigMaps, and Secrets.</p>
                                <p>• Implemented monitoring and alerting solutions by integrating Prometheus metrics collection with Grafana dashboards to gain real-time visibility into
                                    application and infrastructure health.</p>
                                <p>• Implemented cost optimization strategies by monitoring resource utilization, implementing auto-scaling policies, and using cost-optimized services.</p>
                                <p>• Implemented security measures such as IAM roles, access control, and encryption to ensure data confidentiality and integrity.</p>
                                <p>• 25% improvement in availability</p>
                            </div>
                        </motion.div>
                    )}
                </motion.div>

                {/* ================= AI Bandobast ================= */}
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="mb-8 bg-slate-800 rounded-xl border border-slate-700 p-6
  hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20
  cursor-pointer"
                >
                    <div
                        className="cursor-pointer"
                        onClick={() => toggleProject("bandobast")}
                    >
                        <h4 className="text-xl font-semibold flex justify-between items-center">
                            AI Bandobast – AI Event Governance
                            <span className="text-cyan-400">→</span>
                        </h4>
                        <p className="text-gray-400 mt-2">
                            ECS-based containerized smart governance platform.
                        </p>
                    </div>

                    {active === "bandobast" && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mt-6 space-y-6"
                        >
                            <div className="text-gray-300 space-y-3">
                                <p className="font-bold"> AI Bandobast is an AI-powered police event management platform designed to enhance smart governance, operational efficiency, and cost
                                    optimization for large-scale public events</p>
                                <p>• Architected and delivered a cost-optimized containerized infrastructure using AWS ECS, reducing operational overhead by leveraging serverless
                                    and managed services while ensuring scalability and high availability of applications.</p>
                                <p>• Streamlined application deployments by designing and implementing CI/CD pipelines using GitHub Actions, enabling automated build, test, and
                                    deployment processes for backend APIs and static frontend applications, significantly reducing manual release efforts and deployment time.</p>
                                <p>• Established centralized monitoring and performance visibility using AWS CloudWatch, configuring custom metrics, dashboards, and alarms to
                                    proactively detect failures and maintain API uptime and service reliability.</p>
                                <p>• Deployed, configured, and managed containerized application infrastructure on AWS ECS and EKS, ensuring high availability, fault tolerance, and
                                    horizontal scalability for microservices-based architectures.</p>
                                <p>• Administered Kubernetes clusters by managing namespaces, deployments, services, and ingress configurations, enabling secure and isolated
                                    environments for multiple workloads and improving resource utilization.</p>
                                <p>• Implemented and configured cert-manager within Kubernetes clusters to automate SSL/TLS certificate provisioning and renewal processes,
                                    eliminating manual certificate management and improving security compliance</p>
                                <p>• Created, optimized, and maintained Docker images using best practices, including multi-stage builds and image size reduction techniques, and
                                    managed container registries such as  AWS ECR for consistent version-controlled deployments.</p>
                                <p>• Designed and maintained end-to-end CI/CD workflows using GitHub Actions, integrating source control triggers, environment variables, and
                                    secrets management to enable secure and reliable automated deployments across multiple environments</p>
                                <p>• Configured and managed AWS Application Load Balancers, Route 53 DNS records, and domain routing policies, ensuring secure, low-latency, and
                                    highly available access to applications across regions</p>
                                <p>• Implemented HTTPS security using Let’s Encrypt SSL certificates and domain validation techniques, enforcing encrypted communication and
                                    adhering to modern web security standards.</p>
                                <p>• Monitored application performance, infrastructure metrics, and logs using CloudWatch, Prometheus, and Grafana dashboards, enabling real-time
                                    visibility, proactive alerting, and faster incident resolution.</p>
                                <p>• Optimized infrastructure cost and performance by implementing auto-scaling policies, right-sizing compute resources, and analyzing usage
                                    trends, resulting in efficient cloud resource utilization</p>
                                <p>• Troubleshot complex deployment, networking, and container orchestration issues in production, performing root-cause analysis and implementing
                                    corrective actions to maintain system stability and minimize downtime</p>
                                <p>• Configured AWS Budgets integrated with CloudWatch billing alarms and SNS notifications to receive automated email alerts when account spending
                                    exceeded , enabling proactive cost management and budget control.</p>

                            </div>
                        </motion.div>
                    )}
                </motion.div>

            </div>
        </section>
    );
};

export default Projects;