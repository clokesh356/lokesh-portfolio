import React from "react";

const Reliability = () => {
  return (
    <section className="py-20 px-6 bg-slate-800">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-cyan-400 mb-8">
          Reliability & Observability
        </h3>

        <div className="grid md:grid-cols-2 gap-10 text-gray-300">
          
          <div>
            <h4 className="font-semibold mb-3">Monitoring</h4>
            <ul className="space-y-2">
              <li>• Prometheus metrics collection</li>
              <li>• Grafana dashboards</li>
              <li>• CloudWatch centralized logging</li>
              <li>• Custom alarms & SNS alerts</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">High Availability</h4>
            <ul className="space-y-2">
              <li>• Multi-AZ deployments</li>
              <li>• Auto Scaling Groups</li>
              <li>• Health checks & failover</li>
              <li>• Blue/Green deployment strategy</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Reliability;