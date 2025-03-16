import React from "react";
import { Button } from "../../components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Enterprise-Grade Site Monitoring",
  subtitle = "Precision analytics and real-time reporting for construction professionals who demand excellence",
  ctaText = "Start Free Trial",
  onCtaClick = () => console.log("CTA clicked"),
}) => {
  return (
    <section className="relative w-full bg-[#0A0B0D] overflow-hidden py-20 md:py-28 lg:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1800&q=80')] bg-cover bg-center opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0D] via-[#0A0B0D]/95 to-[#0A0B0D]/90" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-30" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-30" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTkuNSA2MEgwVjBoNjBWNjB6TTU5LjUgMWgtNTlWNTloNTlWMXoiIGZpbGw9IiMyMDIwMjAiIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-10" />

      {/* Content container */}
      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16 lg:mb-0"
        >
          <div className="inline-flex items-center rounded-none px-3 py-1 text-xs font-medium bg-[#0F0F0F] text-white mb-6 border border-gray-800">
            <span className="mr-2 text-xs">NEW</span>
            BestReport 2.0 Released
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-xl">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={onCtaClick}
              className="bg-white hover:bg-gray-100 text-black font-medium px-8 py-6 text-base rounded-none"
            >
              {ctaText}
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-gray-700 text-white hover:bg-gray-800 px-8 py-6 text-base rounded-none group"
            >
              Watch Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <p className="text-gray-500 text-sm">Available on:</p>
            <div className="flex gap-6">
              <svg
                className="h-6 w-6 text-gray-400 hover:text-white transition-colors cursor-pointer"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <svg
                className="h-6 w-6 text-gray-400 hover:text-white transition-colors cursor-pointer"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3.18 20.82c.44.2.88.39 1.31.57.62.27 1.24.42 1.84.42.74 0 1.37-.17 1.99-.52.62-.35 1.33-.96 2.17-1.85l.14-.15c1.19-1.29 2.38-2.58 4.54-2.58.63 0 1.28.09 1.93.26.65.17 1.27.4 1.87.69l.6.29v-3.59l-.53-.22c-.56-.23-1.12-.42-1.69-.55-.57-.13-1.14-.2-1.72-.2-1.28 0-2.39.27-3.34.8-.94.53-1.86 1.31-2.75 2.32-1.38-1.05-2.85-1.57-4.4-1.57-.71 0-1.43.11-2.17.34-.74.23-1.46.55-2.17.96l-.51.3v12.35l.6-.28c.36-.17.72-.34 1.09-.51m0-10.5c.3-.17.62-.31.96-.43.34-.12.7-.18 1.09-.18.76 0 1.47.2 2.11.6.64.4 1.27.99 1.88 1.77-1.19 1.38-2.1 2.34-2.63 2.76-.53.42-1.08.63-1.86.63-.32 0-.67-.09-1.04-.26-.37-.17-.8-.42-1.3-.75l.79-.46v-3.68m16.55 5.17c-.6-.28-1.22-.5-1.84-.66-.62-.16-1.26-.25-1.91-.25-1.11 0-1.97.24-2.56.71-.59.47-1.19 1.13-1.81 1.97l-.14.19c-.94 1.28-1.68 2.04-2.21 2.32-.53.28-1.05.41-1.75.41-.44 0-.93-.12-1.47-.35-.54-.23-1.13-.57-1.79-1.01l.79-.46v3.82l.56.26c.58.27 1.15.49 1.71.65.56.16 1.12.24 1.69.24.86 0 1.64-.17 2.33-.5.69-.33 1.41-.84 2.17-1.51.35-.31.71-.67 1.09-1.07.37-.4.78-.86 1.22-1.4.28-.32.56-.59.84-.8.28-.21.59-.37.94-.47.35-.1.75-.15 1.21-.15.36 0 .77.06 1.21.18.44.12.9.29 1.38.51l.6.28v-3.76l-.51-.22z" />
              </svg>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-xs mb-4">
              TRUSTED BY INDUSTRY LEADERS
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=company${i}&backgroundColor=gray&fontFamily=Arial&fontSize=36&fontWeight=bold`}
                  alt={`Company ${i}`}
                  className="h-8 opacity-50 grayscale"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Device mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full max-w-xs lg:max-w-sm"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 to-white/5 rounded-lg blur-xl opacity-70"></div>

          <div className="relative bg-[#0F0F0F] rounded-lg overflow-hidden border border-gray-800 shadow-2xl">
            {/* Device frame */}
            <div className="pt-4 px-2 bg-[#0F0F0F]">
              <div className="w-full h-6 flex items-center justify-between px-2 mb-2">
                <div className="w-16 h-2 bg-gray-800 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
              </div>

              {/* App screen */}
              <div className="relative rounded-t-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80"
                  alt="BestReport App Interface"
                  className="w-full aspect-[9/16] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                {/* UI elements overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="w-full h-2 bg-white/20 rounded-full mb-3">
                    <div className="w-3/4 h-full bg-white rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                      <Download className="h-6 w-6 text-black" />
                    </div>
                    <div className="space-y-1">
                      <div className="w-20 h-2 bg-white/30 rounded-full"></div>
                      <div className="w-16 h-2 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Device bottom */}
            <div className="h-4 bg-[#0F0F0F] border-t border-gray-800"></div>
          </div>

          {/* Data visualization elements */}
          <div className="absolute -right-16 top-1/4 bg-[#0F0F0F] border border-gray-800 rounded p-3 shadow-lg">
            <div className="w-24 h-1 bg-white rounded-full mb-2"></div>
            <div className="w-16 h-1 bg-gray-700 rounded-full"></div>
          </div>

          <div className="absolute -left-12 bottom-1/3 bg-[#0F0F0F] border border-gray-800 rounded-full p-2 shadow-lg">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-white"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
