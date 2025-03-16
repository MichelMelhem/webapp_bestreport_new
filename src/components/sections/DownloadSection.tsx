import React from "react";
import { Button } from "../../components/ui/button";
import { motion } from "framer-motion";
import {
  AppleIcon,
  PlayIcon,
  ArrowRight,
  Download,
  Shield,
  BarChart,
  Smartphone,
} from "lucide-react";

interface DownloadSectionProps {
  title?: string;
  description?: string;
  appStoreLink?: string;
  playStoreLink?: string;
}

const DownloadSection = ({
  title = "Download the BestReport App",
  description = "Access institutional-grade site monitoring from anywhere with our secure mobile application. Available on iOS and Android platforms.",
  appStoreLink = "https://apps.apple.com",
  playStoreLink = "https://play.google.com",
}: DownloadSectionProps) => {
  return (
    <section
      id="download"
      className="w-full py-24 md:py-32 bg-[#0A0B0D] relative"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTkuNSA2MEgwVjBoNjBWNjB6TTU5LjUgMWgtNTlWNTloNTlWMXoiIGZpbGw9IiMyMDIwMjAiIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-none px-3 py-1 text-xs font-medium bg-[#0F0F0F] text-white mb-6 border border-gray-800">
            <span className="mr-2 text-xs">MOBILE ACCESS</span>
          </div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>

          <motion.p
            className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left side - App mockups */}
          <motion.div
            className="lg:w-1/2 relative order-2 lg:order-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[600px] w-full flex items-center justify-center">
              {/* Phone mockup 1 - in front */}
              <div className="absolute z-20 transform -rotate-6">
                <div className="bg-[#0F0F0F] p-2 shadow-2xl border border-gray-800">
                  <div className="relative overflow-hidden w-[250px] h-[500px] border-[8px] border-[#0F0F0F]">
                    <img
                      src="https://images.unsplash.com/photo-1590725121839-892b458a74fe?w=500&q=80"
                      alt="BestReport App Dashboard"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                    {/* UI overlay elements */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="w-full h-1 bg-white/20 rounded-none mb-3">
                        <div className="w-3/4 h-full bg-white"></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="w-10 h-10 bg-white flex items-center justify-center">
                          <Download className="h-5 w-5 text-black" />
                        </div>
                        <div className="space-y-1">
                          <div className="w-16 h-1 bg-white/30"></div>
                          <div className="w-12 h-1 bg-white/20"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data visualization elements */}
                <div className="absolute -right-16 top-1/4 bg-[#0F0F0F] border border-gray-800 p-3 shadow-lg">
                  <div className="w-20 h-1 bg-white mb-2"></div>
                  <div className="w-14 h-1 bg-gray-700"></div>
                </div>
              </div>

              {/* Phone mockup 2 - behind */}
              <div className="absolute z-10 transform translate-x-20 rotate-6">
                <div className="bg-[#0F0F0F] p-2 shadow-2xl border border-gray-800">
                  <div className="relative overflow-hidden w-[250px] h-[500px] border-[8px] border-[#0F0F0F]">
                    <img
                      src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&q=80"
                      alt="BestReport App Reports"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -left-12 bottom-1/3 bg-[#0F0F0F] border border-gray-800 rounded-full p-2 shadow-lg">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Text and download buttons */}
          <motion.div
            className="lg:w-1/2 space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Shield className="h-6 w-6 text-white" />,
                    title: "Enterprise Security",
                    description:
                      "Bank-grade encryption and multi-factor authentication",
                  },
                  {
                    icon: <BarChart className="h-6 w-6 text-white" />,
                    title: "Real-time Analytics",
                    description:
                      "Instant insights and monitoring from anywhere",
                  },
                  {
                    icon: <Smartphone className="h-6 w-6 text-white" />,
                    title: "Offline Capability",
                    description: "Continue working even without connectivity",
                  },
                  {
                    icon: <Download className="h-6 w-6 text-white" />,
                    title: "Seamless Updates",
                    description:
                      "Always access the latest features and security patches",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-[#0F0F0F] border border-gray-800 p-5"
                  >
                    <div className="p-2 bg-white/5 inline-block mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-white font-medium mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                className="flex items-center gap-2 bg-white hover:bg-gray-100 text-black px-6 py-6 rounded-none"
                asChild
              >
                <a
                  href={appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AppleIcon className="h-5 w-5" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs">Download on the</span>
                    <span className="text-base font-semibold">App Store</span>
                  </div>
                </a>
              </Button>

              <Button
                className="flex items-center gap-2 bg-[#0F0F0F] hover:bg-gray-800 text-white px-6 py-6 rounded-none border border-gray-700"
                asChild
              >
                <a
                  href={playStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PlayIcon className="h-5 w-5" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs">Get it on</span>
                    <span className="text-base font-semibold">Google Play</span>
                  </div>
                </a>
              </Button>
            </div>

            <Button
              variant="link"
              className="text-gray-400 hover:text-white pl-0 flex items-center gap-1 mt-4 group"
            >
              Learn more about our app features{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <div className="pt-8 mt-8 border-t border-gray-800">
              <p className="text-gray-500 text-sm">
                Available for iOS 14+ and Android 8+. Enterprise deployment
                options available.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
