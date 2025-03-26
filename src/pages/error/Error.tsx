import { Link } from "react-router-dom"
import AppBar from "@/components/layout/AppBar.tsx"
import HeroSection from "@/pages/home/components/HeroSection.tsx"
import { motion } from "framer-motion"
import DownloadSection from "@/pages/home/components/DownloadSection.tsx"
import FeatureSection from "@/pages/home/components/FeatureSection.tsx"
import TestimonialSection from "@/pages/home/components/TestimonialSection.tsx"
import PricingSection from "@/pages/home/components/PricingSection.tsx"
import Footer from "@/components/layout/Footer.tsx"
import React from "react"

const Error = () => {
  return (
    <div className="bg-background h-screen">
      <AppBar />
      <main>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Return to Home</Link>
      </main>
      <Footer />
    </div>
  )
}

export default Error
