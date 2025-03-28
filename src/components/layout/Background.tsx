import { motion } from "framer-motion"
import React, { ReactNode } from "react"

interface BackgroundProps {
  children: ReactNode
  // Vous pouvez ajouter d'autres props optionnelles ici
  className?: string
}

export function Background({ children, className = "" }: BackgroundProps) {
  return (
    <div
      className={`relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-4 text-center ${className}`}>
      {/* Background Elements Layer */}
      <div className="absolute inset-0 z-0">
        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0 bg-[length:50px_50px] opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(to right, #64748b 1px, transparent 1px), linear-gradient(to bottom, #64748b 1px, transparent 1px)"
          }}
          animate={{ y: [0, -25] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        {/* Floating Gradient Circles */}
        <motion.div
          className="absolute w-[600px] h-[600px] -top-48 -left-48 rounded-full bg-gradient-to-r from-blue-200 to-cyan-200 opacity-40 blur-[80px]"
          animate={{ rotate: 360, scale: [1, 1.1] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] -bottom-48 -right-48 rounded-full bg-gradient-to-r from-cyan-200 to-blue-200 opacity-40 blur-[80px]"
          animate={{ rotate: -360, scale: [1, 1.1] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        {/* Animated Diagonal Lines */}
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
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/70 to-white/60 z-20" />

      {/* Content */}
      <div className="relative z-30 mx-auto space-y-6">{children}</div>
    </div>
  )
}
