import React, { useState } from "react";
import { motion } from "framer-motion";
import FeatureTab from "../dashboard/FeatureTab";
import { Button } from "../ui/button";
import {
  ChevronDown,
  Monitor,
  Smartphone,
  Bell,
  ArrowRight,
} from "lucide-react";

interface DashboardSectionProps {
  id?: string;
  className?: string;
}

const DashboardSection = ({
  id = "dashboard",
  className = "",
}: DashboardSectionProps) => {
  const [activeTab, setActiveTab] = useState("supervision");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id={id} className={`py-24 md:py-32 bg-[#0A0B0D] ${className}`}>
      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center rounded-none px-3 py-1 text-xs font-medium bg-[#0F0F0F] text-white mb-6 border border-gray-800">
            <span className="mr-2 text-xs">ENTERPRISE FEATURES</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            Financial-Grade Site Monitoring Dashboard
          </h2>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our institutional-quality dashboard delivers comprehensive tools for
            construction site management with the precision and reliability
            demanded by industry leaders.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="relative"
        >
          <div className="bg-[#0F0F0F] p-6 md:p-8 border border-gray-800 mb-16 overflow-hidden relative">
            <div className="relative z-10">
              <FeatureTab activeTab={activeTab} onTabChange={handleTabChange} />
            </div>
          </div>

          <div
            className={`transition-all duration-500 ${isExpanded ? "h-auto" : "max-h-[500px] overflow-hidden relative"}`}
          >
            <div className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Institutional Interface",
                    description:
                      "Enterprise-grade controls and visualizations designed for precision and reliability.",
                    icon: <Monitor className="h-8 w-8 text-white" />,
                  },
                  {
                    title: "Mobile Accessibility",
                    description:
                      "Secure access from any device with our responsive design and multi-factor authentication.",
                    icon: <Smartphone className="h-8 w-8 text-white" />,
                  },
                  {
                    title: "Risk Monitoring",
                    description:
                      "Advanced alert system with customizable thresholds for proactive risk management.",
                    icon: <Bell className="h-8 w-8 text-white" />,
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="bg-[#0F0F0F] p-8 border border-gray-800 hover:border-white/30 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-white/5 inline-block mb-6 group-hover:bg-white/10 transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {isExpanded && (
                <div className="bg-[#0F0F0F] p-8 border border-gray-800">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Enterprise Integration Ecosystem
                  </h3>
                  <p className="text-gray-400 mb-8 max-w-3xl">
                    Our platform connects seamlessly with your existing
                    construction management infrastructure, providing a unified
                    workflow experience with institutional-grade security.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      "Project Management Software",
                      "BIM Tools",
                      "Financial Systems",
                      "IoT Sensors",
                      "HR & Workforce Management",
                      "Equipment Tracking",
                      "Material Management",
                      "Compliance Systems",
                    ].map((integration, index) => (
                      <div
                        key={index}
                        className="bg-[#0A0B0D] p-4 text-center text-sm font-medium text-gray-400 border border-gray-800 hover:border-white/30 hover:text-white transition-all duration-300"
                      >
                        {integration}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {!isExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0B0D] to-transparent pointer-events-none" />
            )}
          </div>

          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800 rounded-none"
            >
              {isExpanded ? "Show Less" : "Show More"}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
              />
            </Button>
          </div>

          <div className="mt-20 pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to transform your site monitoring?
              </h3>
              <p className="text-gray-400 mb-6">
                Schedule a personalized demo with our enterprise solutions team.
              </p>
              <Button className="bg-white hover:bg-gray-100 text-black font-medium rounded-none flex items-center gap-2">
                Request Enterprise Demo <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="bg-[#0F0F0F] border border-gray-800 p-6 max-w-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                  <span className="text-white font-bold">99.9%</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">Uptime Guarantee</h4>
                  <p className="text-gray-500 text-sm">
                    Enterprise SLA available
                  </p>
                </div>
              </div>
              <div className="h-px bg-gray-800 my-4"></div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                  <span className="text-white font-bold">24/7</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">Dedicated Support</h4>
                  <p className="text-gray-500 text-sm">
                    For enterprise clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardSection;
