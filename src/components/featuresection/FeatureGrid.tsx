import React from "react"
import { motion } from "framer-motion"
import { ClipboardCheck, Send, FolderOpen } from "lucide-react"

interface FeatureGridProps {
  id?: string
  className?: string
  title?: string
  subtitle?: string
}

const FeatureGrid = ({
  title = "Key Platform Features",
  subtitle = "Our comprehensive suite of tools designed to streamline your construction site management process."
}: FeatureGridProps) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const features = [
    {
      title: "Inspection and Observation",
      description:
        "Comprehensive tools for site inspection with photo documentation and real-time observation capabilities.",
      icon: <ClipboardCheck className="h-8 w-8 text-black" />
    },
    {
      title: "Report and Communication",
      description:
        "Streamlined reporting system with instant notifications and team collaboration features.",
      icon: <Send className="h-8 w-8 text-black" />
    },
    {
      title: "Project Organization",
      description:
        "Intuitive project management interface with customizable workflows and document storage.",
      icon: <FolderOpen className="h-8 w-8 text-black" />
    }
  ]

  return (
    <div className="container mx-auto max-w-7xl px-4 md:px-6 relative">
      {/* Background elements */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 tracking-tight">{title}</h2>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-100 p-8 border border-gray-300 hover:border-black/30 transition-all duration-300 group">
            <div className="p-3 bg-black/5 inline-block mb-6 group-hover:bg-black/10 transition-colors duration-300">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-black mb-3">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-gray-300 text-center">
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our platform is designed with construction professionals in mind, providing the tools
          you need to manage your projects efficiently and effectively.
        </p>
      </div>
    </div>
  )
}

export default FeatureGrid
