import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./sections/HeroSection";
import DashboardSection from "./sections/DashboardSection";
import PricingSection from "./sections/PricingSection";
import TestimonialSection from "./sections/TestimonialSection";
import DownloadSection from "./sections/DownloadSection";
import AppBar from "./layout/AppBar";
import Footer from "./layout/Footer";
import { ThemeProvider } from "./theme/ThemeProvider";

const Home = () => {
  return (
    <ThemeProvider>
      <div className="bg-background min-h-screen">
        <AppBar />
        <main className="pt-20">
          {/* Add padding to account for fixed navbar */}
          <HeroSection />
          <DashboardSection />
          <PricingSection />
          <TestimonialSection />
          <DownloadSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Home;
