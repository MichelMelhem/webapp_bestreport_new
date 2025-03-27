import React from "react"
import { motion } from "framer-motion"
import HeroSection from "./components/HeroSection.tsx"
import PricingSection from "./components/PricingSection.tsx"
import TestimonialSection from "./components/TestimonialSection.tsx"
import DownloadSection from "./components/DownloadSection.tsx"
import FeatureSection from "./components/FeatureSection.tsx"
import AppBar from "@/components/layout/AppBar.tsx"
import Footer from "@/components/layout/Footer.tsx"

const Home = () => {
  return (
    <div className="bg-background h-screen">
      <AppBar />
      <main>
        <HeroSection />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}>
          <DownloadSection />
        </motion.div>
        <WaveDivider color="#f4f1eb" flip={true} />
        <FeatureSection />
        <WaveDivider color="#0A0B0D" flip={false} />
        <TestimonialSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  )
}

const WaveDivider = ({ color = "currentColor", flip = false }) => {
  return (
    <svg
      className={`w-full h-auto ${flip ? "rotate-180" : ""}`}
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color}
        fillOpacity="1"
        d="M0,192L80,181.3C160,171,320,149,480,154.7C640,160,800,192,960,181.3C1120,171,1280,117,1360,90.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>
  )
}

export default Home
