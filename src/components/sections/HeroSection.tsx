import React from "react";
import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  words?: string[];
  onCtaClick?: () => void;
}


const HeroSection: React.FC<HeroSectionProps> = ({
  words = ["Monitoring", "Managment", "Reporting"],
  subtitle = "Precision analytics and real-time reporting for construction professionals who demand excellence",
  ctaText = "Start Free Trial",
  onCtaClick = () => console.log("CTA clicked"),
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [delay, setDelay] = useState(150); // Controls typing speed

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting && text.length < currentWord.length) {
      // Typing letters
      setTimeout(() => setText(currentWord.slice(0, text.length + 1)), delay);
    } else if (isDeleting && text.length > 0) {
      // Deleting letters
      setTimeout(() => setText(currentWord.slice(0, text.length - 1)), delay / 2);
    } else if (!isDeleting && text.length === currentWord.length) {
      // Pause after typing before deleting
      setTimeout(() => setIsDeleting(true), 3000);
    } else if (isDeleting && text === "") {
      // Pause on empty before switching words
      setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 500);
    }
  }, [text, isDeleting, wordIndex]);
  return (
    <section className="relative w-full bg-white overflow-hidden py-20 md:py-28 lg:py-32">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1800&q=80')] bg-cover bg-center opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/90" />

      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16 lg:mb-0"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 tracking-tight">
            Enterprise-Grade Site{" "}
            <span
              className="text-black inline-block min-w-[200px] h-[70px] p-1"
              style={{ whiteSpace: "nowrap" }}
            >
              {text}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed max-w-xl">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={onCtaClick}
              className="bg-black hover:bg-gray-800 text-white font-medium px-8 py-6 text-base rounded-none"
            >
              {ctaText}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-700 text-black hover:bg-gray-200 px-8 py-6 text-base rounded-none group"
            >
              Watch Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>

        {/* Video container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full max-w-xs lg:max-w-lg overflow-hidden rounded-2xl shadow-lg aspect-video"   >
          <iframe

            src="https://www.youtube.com/embed/p5G2-sN1MN4?autoplay=1&mute=1"
            title="Best Report - Suivi de chantier [FR]"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-2xl">

          </iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
