import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ThemeToggle from "../theme/ThemeToggle";

interface AppBarProps {
  className?: string;
}

const AppBar = ({ className = "" }: AppBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Dashboard", href: "#dashboard" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Download", href: "#download" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-white border-b border-gray-100",
        className,
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-900">
                <span className="text-blue-600">Best</span>Report
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium transition-colors text-gray-600 hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons (Desktop) */}
          <div className="hidden md:flex md:items-center space-x-4">
            <ThemeToggle className="text-gray-600 hover:text-blue-600" />

            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-blue-600"
            >
              <Search className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-blue-600"
            >
              <Bell className="h-5 w-5" />
            </Button>

            <div className="h-6 w-px bg-gray-300"></div>

            <Button
              variant="ghost"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
            >
              <User className="h-5 w-5" />
              <span>Sign in</span>
            </Button>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle className="text-gray-600 hover:text-blue-600" />

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
              className="flex items-center justify-between px-3 py-3 text-base font-medium border-b text-gray-600 hover:text-blue-600 hover:bg-gray-100 border-gray-200"
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 space-y-2">
            <Button
              variant="outline"
              className="w-full justify-center text-gray-600 hover:text-blue-600 border-gray-300 hover:bg-gray-100 rounded-md"
            >
              Sign in
            </Button>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
