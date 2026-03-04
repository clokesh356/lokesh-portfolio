import React from "react";
import { motion } from "framer-motion";
import staticWebsiteHosting from "../assets/staticWebsiteHosting.png";

const Architecture = () => {
  return (
    <section id="architecture" className="py-20 px-6 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-cyan-400">
          AWS Architecture
        </h3>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Diagram */}
          <motion.img
            src={staticWebsiteHosting}
            alt="AWS Architecture"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-xl shadow-lg border border-slate-700"
          />

          {/* Description */}
          <div>
            <h4 className="text-xl font-semibold mb-4">
              Static Website Hosting with CloudFront
            </h4>

            <ul className="text-gray-300 space-y-2">
             <li> • Designed static website hosting using S3 + CloudFront</li>
             <li> • Configured Route53 DNS and HTTPS via ACM</li>
             <li> • Automated deployments with GitHub Actions</li>
             <li> • Implemented secure S3 bucket policies</li>
             <li> • Optimized CDN caching to reduce latency and cost</li>
             <li> • Achieved highly available, serverless architecture</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Architecture;