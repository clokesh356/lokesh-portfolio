import React from "react";

const CostOptimization = () => {
  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-cyan-400 mb-8">
          Cost Optimization Strategy
        </h3>

        <ul className="text-gray-300 space-y-3">
          <li>• Right-sizing compute resources</li>
          <li>• Auto-scaling based on load</li>
          <li>• Reserved instance strategies</li>
          <li>• Lifecycle rules for S3</li>
          <li>• Budget alerts via CloudWatch + SNS</li>
          <li>• Eliminated manual tasks via Terraform automation</li>
          <li>• Reduced infra cost by 25%</li>
        </ul>
      </div>
    </section>
  );
};

export default CostOptimization;