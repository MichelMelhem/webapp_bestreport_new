import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import { Menu, X } from "lucide-react"
import { Button } from "@components/ui/button"
import { cn } from "@lib/utils"
import Logo from "@assets/icon.png"

interface AppBarProps {
  className?: string
}

const AppBar = ({ className = "" }: AppBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState("")
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { name: "Download", href: "#download" },
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)

      if (!isScrolled) {
        setCurrentSection("")
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    const sectionElements = navLinks
      .map((link) => document.getElementById(link.href.substring(1)))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
            setCurrentSection(entry.target.id)
          }
        })
      },
      { threshold: 0.1, rootMargin: "-30% 0px -30% 0px" }
    )

    sectionElements.forEach((section) => observer.observe(section))

    return () => {
      sectionElements.forEach((section) => observer.unobserve(section))
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const isDarkSection = currentSection === "testimonials" || currentSection === "pricing"

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 h-16",
        !scrolled && !currentSection
          ? "bg-transparent border-transparent"
          : isDarkSection
            ? "bg-[#0A0B0D]/80 backdrop-blur-md border-gray-800/30"
            : "bg-white/70 backdrop-blur-md border-gray-200/20 shadow-sm",
        className
      )}>
      <div className="max-w-7xl mx-auto h-full px-4 md:px-11">
        <div className="flex justify-between items-center h-full gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="h-8 rounded-lg" />
            <span
              className={cn(
                "text-lg font-semibold transition-colors",
                isDarkSection ? "text-white" : "text-gray-900"
              )}>
              BestReport
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <HashLink
                key={link.name}
                to={link.href}
                smooth
                className={cn(
                  "py-2 text-sm font-medium transition-colors",
                  isDarkSection
                    ? "text-white hover:text-gray-300"
                    : "text-black hover:text-gray-900",
                  currentSection === link.href.substring(1) && "text-blue-500"
                )}
                onClick={closeMenu}>
                {link.name}
              </HashLink>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex gap-4">
            <Link to="/signup">
              <Button variant="outline">Sign up</Button>
            </Link>
            <Link to="/signin">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5">
                Sign in
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={cn(
              "md:hidden p-2 rounded-md focus:outline-none transition-colors ml-auto",
              isDarkSection ? "text-white" : "text-gray-700"
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-16 transition-all duration-300 border-t",
          isMenuOpen
            ? "opacity-100 pointer-events-auto max-h-[calc(100vh-4rem)]"
            : "opacity-0 pointer-events-none max-h-0",
          isDarkSection
            ? "bg-[#0A0B0D]/90 backdrop-blur-md border-gray-800"
            : "bg-white/90 backdrop-blur-md border-gray-200"
        )}>
        <div className="flex flex-col gap-2 px-4 py-4 overflow-y-auto max-h-[calc(100vh-4rem)]">
          {navLinks.map((link) => (
            <HashLink
              key={link.name}
              to={link.href}
              smooth
              className={cn(
                "block py-3 text-base font-medium rounded-md transition-colors",
                isDarkSection
                  ? "text-white hover:bg-gray-800/30"
                  : "text-gray-700 hover:bg-gray-100/30",
                currentSection === link.href.substring(1) && "text-blue-500"
              )}
              onClick={closeMenu}>
              {link.name}
            </HashLink>
          ))}

          <div className="flex flex-col gap-3 pt-4 pb-2">
            <Link to="/signup">
              <Button variant="outline">Sign up</Button>
            </Link>
            <Link to="/signin">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5">
                Sign in
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default AppBar
