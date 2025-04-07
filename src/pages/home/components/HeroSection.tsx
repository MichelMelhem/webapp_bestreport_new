import React, { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button.tsx"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface HeroSectionProps {
  words?: string[]
  subtitle?: string
  ctaText?: string
  onCtaClick?: () => void
}

const HeroSection: React.FC<HeroSectionProps> = ({
  words = ["Monitoring.", "Management.", "Reporting."],
  subtitle = "Precision analytics and real-time reporting for construction professionals who demand excellence",
  ctaText = "Start Free Trial",
  onCtaClick = () => console.log("CTA clicked")
}) => {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
  const translateY = useTransform(scrollYProgress, [0, 0.5], [0, -100])

  useEffect(() => {
    const currentWord = words[wordIndex]

    if (!isDeleting && text.length < currentWord.length) {
      setTimeout(() => setText(currentWord.slice(0, text.length + 1)), 100)
    } else if (isDeleting && text.length > 0) {
      setTimeout(() => setText(currentWord.slice(0, text.length - 1)), 50)
    } else if (!isDeleting && text.length === currentWord.length) {
      setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && text === "") {
      setTimeout(() => {
        setIsDeleting(false)
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length)
      }, 500)
    }
  }, [text, isDeleting, wordIndex, words])

  return (
    <motion.section
      className="
        relative w-full min-h-screen
        flex items-center justify-center
        px-6 md:px-12 bg-white overflow-hidden
        pt-20 lg:pt-0
      "
      style={{ opacity, scale, y: translateY }}
    >
      {/* Background Elements Layer */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-[length:50px_50px] opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(to right, #64748b 1px, transparent 1px), linear-gradient(to bottom, #64748b 1px, transparent 1px)"
          }}
          animate={{ y: [0, -25] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] -top-48 -left-48 rounded-full bg-gradient-to-r from-blue-200 to-cyan-200 opacity-40 blur-[80px]"
          animate={{ rotate: 360, scale: [1, 1.1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] -bottom-48 -right-48 rounded-full bg-gradient-to-r from-cyan-200 to-blue-200 opacity-40 blur-[80px]"
          animate={{ rotate: -360, scale: [1, 1.1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] w-48 bg-gray-400"
              style={{
                top: `${i * 5}%`,
                left: `-${i * 2}%`,
                transform: `rotate(45deg)`,
                opacity: 0.2
              }}
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 20,
                delay: Math.random() * 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/70 to-white/60 z-20" />

      {/* Foreground Layer */}
      <div className="relative z-30 flex flex-col lg:flex-row items-center justify-between gap-12 w-full max-w-7xl">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left max-w-2xl flex-shrink-0"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-black tracking-tight">
            Enterprise-Grade Site{" "}
            <span className="text-black inline-block min-w-[200px]">{text}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-800 mt-4">{subtitle}</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/signup">
              <Button
                size="lg"
                onClick={onCtaClick}
                className="bg-black hover:bg-gray-800 text-white px-8 py-4"
              >
                {ctaText}
              </Button>
            </Link>
            <a href="mailto:contact@bestreport.fr">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-black hover:bg-gray-200 px-8 py-4 group"
              >
                Request a demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full lg:w-[640px] aspect-video overflow-hidden rounded-2xl shadow-lg"
        >
          <iframe
            src="https://www.youtube.com/embed/_bICVBjG9K4?controls=0&autoplay=1&mute=1&loop=1&playlist=_bICVBjG9K4"
            title="Best Report - Site Reporting Software"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-2xl"
          ></iframe>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default HeroSection
