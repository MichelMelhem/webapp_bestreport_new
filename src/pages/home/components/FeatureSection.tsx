import React from "react"
import { motion } from "framer-motion"
import PdfView from "@/pages/home/components/partials/PdfViewer.tsx"
import rapport from "@/assets/rapport.pdf"
import FeatureGrid from "@/pages/home/components/partials/FeatureGrid.tsx"

interface FeatureSectionProps {
  id?: string
  className?: string
  title?: string
  description?: string
  checkpoints?: string[]
  report_src?: string
}

const FeatureSection = ({
  id = "features",
  className = "",
  description = "Generate your worksite report in pdf format in record time, which you can then send directly to your collaborators to keep your project moving forward quickly.",
  report_src = rapport
}: FeatureSectionProps) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id={id} className={`py-16 md:py-24 bg-white ${className}`}>
      <FeatureGrid />
      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative pt-20 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="w-full">
            <h4 className="text-6xl font-bold text-black mb-4 relative inline-block">
              Generate{" "}
              <span className="relative inline-block">
                outstanding
                <span className="absolute left-0 bottom-[-15px] w-full">
                  <svg
                    className="w-full"
                    height="20"
                    viewBox="0 0 300 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 15 C60 5, 120 20, 180 10 S240 10, 300 15"
                      stroke="url(#grad1)"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="grad1"
                        x1="0"
                        y1="10"
                        x2="300"
                        y2="10"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#FF5733" />
                        <stop offset="50%" stopColor="#FFC300" />
                        <stop offset="100%" stopColor="#33FF57" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </span>{" "}
              reports.
            </h4>
            <p className="text-lg pt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full">
            <PdfView pdfSrc={report_src} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
