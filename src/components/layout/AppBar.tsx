import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ThemeToggle from "../theme/ThemeToggle";
import Logo from "../../assets/icon.png";

interface AppBarProps {
  className?: string;
}

const AppBar = ({ className = "" }: AppBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState<string>("");

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },

  ];

  useEffect(() => {
    const sections = navLinks.map((link) => document.querySelector(link.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id); // Update the current section
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getNavBarColor = () => {
    switch (currentSection) {
      case "features":
        return "bg-white";
      case "about":
        return "bg-white";
      case "download":
        return "bg-white";
      case "pricing":
        return "bg-[#0A0B0D]";
      case "testimonials":
        return "bg-[#0A0B0D]";
      default:
        return "bg-white";
    }
  };

  const getTextColor = () => {
    switch (currentSection) {
      case "features":
        return "text-[#0A0B0D]";
      case "about":
        return "text-[#0A0B0D]";
      case "download":
        return "text-[#0A0B0D]";
      case "pricing":
        return "text-white";
      case "testimonials":
        return "text-white";
      default:
        return "text-white";
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        getNavBarColor(),

        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="BestReport logo" className=" h-12 rounded-lg mx-auto mb-6" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center justify-start md:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(getTextColor(), "px-3 py-2  text-base font-medium transition-colors  hover:text-blue-600")}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons (Desktop) */}
          <div className="hidden md:flex md:items-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md">
              Download now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">

            <button
              type="button"
              className="inline-flex items-center justify-center p-2 focus:outline-none text-gray-600 hover:text-blue-600 hover:bg-gray-100"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-white border-t border-gray-200`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn("flex items-center justify-between px-3 py-3 text-base font-medium border-b  hover:text-blue-600 hover:bg-gray-100 border-gray-200")}
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav >
  );
};

export default AppBar;
