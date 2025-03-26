import React from "react"
import { Button } from "@components/ui/button.tsx"
import { motion } from "framer-motion"
import { AppleIcon, PlayIcon, Download, Smartphone, Star, Clock } from "lucide-react"

import screenshot1 from "@assets/Download-Screenshot1.png"
import screenshot2 from "@assets/Download-Screenshot2.png"

interface DownloadSectionProps {
  title?: string
  description?: string
  appStoreLink?: string
  playStoreLink?: string
}

const DownloadSection = ({
  title = "Download the BestReport App",
  description = "Access institutional-grade site monitoring from anywhere with our secure mobile application. Available on iOS and Android platforms.",
  appStoreLink = "https://apps.apple.com/us/app/best-report/id1554741359",
  playStoreLink = "https://play.google.com/store/apps/details?id=com.smartapps.bestreport"
}: DownloadSectionProps) => {
  return (
    <section id="download" className="w-full py-24 md:py-32 bg-[#f4f1eb] relative">
      {/* Background elements */}

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTkuNSA2MEgwVjBoNjBWNjB6TTU5LjUgMWgtNTlWNTloNTlWMXoiIGZpbGw9IiMyMDIwMjAiIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}>
            {title}
          </motion.h2>

          <motion.p
            className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}>
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
            viewport={{ once: true }}>
            <div className="relative h-[600px] w-full flex items-center justify-center">
              {/* Phone mockup 1 - in front */}
              <div className="absolute z-20 transform -rotate-6">
                <div className="bg-[#F0F0F0] p-2 shadow-2xl border border-gray-300">
                  <div className="relative overflow-hidden w-[250px] h-[500px] border-[8px] border-[#F0F0F0]">
                    <img
                      src={screenshot1}
                      alt="BestReport App Dashboard"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0"></div>

                    {/* UI overlay elements */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex justify-between items-center"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone mockup 2 - behind */}
              <div className="absolute z-10 transform translate-x-20 rotate-6">
                <div className="bg-[#F0F0F0] p-2 shadow-2xl border border-gray-300">
                  <div className="relative overflow-hidden w-[250px] h-[500px] border-[8px] border-[#F0F0F0]">
                    <img
                      src={screenshot2}
                      alt="BestReport App Reports"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 "></div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -left-12 bottom-1/3 bg-[#F0F0F0] border border-gray-300 rounded-full p-2 shadow-lg">
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
            viewport={{ once: true }}>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Star className="h-6 w-6 text-black" />,
                    title: "Worksite quality",
                    description:
                      "Companies know exactly what they have to do, and can intervene more quickly without risk of error."
                  },
                  {
                    icon: <Clock className="h-6 w-6 text-black" />,
                    title: "Gain time",
                    description: "Save up to 60 minutes per job report."
                  },
                  {
                    icon: <Smartphone className="h-6 w-6 text-black" />,
                    title: "Offline Capability",
                    description: "Continue working even without connectivity"
                  },
                  {
                    icon: <Download className="h-6 w-6 text-black" />,
                    title: "Meet deadlines and reassure your customers",
                    description:
                      "Your customers will love BestReport for its quality follow-up, controlled deadlines and costs, and high-quality, detailed reports."
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-[#F0F0F0] border border-gray-300 p-5">
                    <div className="p-2 bg-black/5 inline-block mb-4">{feature.icon}</div>
                    <h3 className="text-black font-medium mb-2">{feature.title}</h3>
                    <p className="text-gray-700 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                className="flex items-center gap-2 bg-white hover:bg-gray-400 text-gray-900 px-6 py-7"
                asChild>
                <a href={appStoreLink} target="_blank" rel="noopener noreferrer">
                  <AppleIcon className="h-5 w-5 text-gray-900" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-gray-900">Download on the</span>
                    <span className="text-base font-semibold text-gray-900">App Store</span>
                  </div>
                </a>
              </Button>

              <Button
                className="flex items-center gap-2 bg-white hover:bg-gray-400 text-gray-900 px-6 py-7"
                asChild>
                <a href={playStoreLink} target="_blank" rel="noopener noreferrer">
                  <PlayIcon className="h-5 w-5 text-gray-900" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-gray-900">Get it on</span>
                    <span className="text-base font-semibold text-gray-900">Google Play</span>
                  </div>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DownloadSection
