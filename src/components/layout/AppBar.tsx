import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Logo from "@/assets/icon.png"
import { type RootState, useAppDispatch } from "@/lib/redux/store"
import { useSelector } from "react-redux"
import { logoutUser } from "@/lib/redux/auth.reducer"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from "@/components/ui/navigation-menu"

interface AppBarProps {
  className?: string
}

const AppBar = ({ className = "" }: AppBarProps) => {
  const [currentSection, setCurrentSection] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const userEmail = useSelector((state: RootState) => state.auth.user)
  const dispatch = useAppDispatch()

  const navLinks = [
    { name: "Download", href: "/#download" },
    { name: "Features", href: "/#features" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Pricing", href: "/#pricing" }
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
      .map((link) => document.getElementById(link.href.substring(2)))
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
  }, [navLinks])

  const isDarkSection = currentSection === "testimonials" || currentSection === "pricing"

  // Get user initials for avatar
  const getUserInitials = () => {
    if (!userEmail) return "BR"
    const email = userEmail.toString()
    return email.substring(0, 2).toUpperCase()
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        !scrolled && !currentSection
          ? "bg-transparent border-transparent"
          : isDarkSection
            ? "bg-[#0A0B0D]/80 backdrop-blur-md border-b border-gray-800/30"
            : "bg-white/70 backdrop-blur-md border-b border-gray-200/20 shadow-sm",
        className
      )}>
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo || "/placeholder.svg"} alt="Logo" className="h-8 w-8 rounded-lg" />
          <span
            className={cn(
              "text-lg font-semibold transition-colors",
              isDarkSection ? "text-white" : "text-gray-900"
            )}>
            BestReport
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.name}>
                <HashLink
                  to={link.href}
                  smooth
                  className={cn(
                    "py-2 px-4 text-sm font-medium transition-colors rounded-md",
                    isDarkSection
                      ? "text-white hover:text-gray-300"
                      : "text-black hover:text-gray-900",
                    currentSection === link.href.substring(2) && "text-primary"
                  )}>
                  {link.name}
                </HashLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {userEmail ? (
            <>
              <Link to="/settings">
                <Button>My account</Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => {
                  dispatch(logoutUser())
                }}>
                Sign out
              </Button>
            </>
          ) : (
            <>
              <Link to="/signup">
                <Button variant="outline">Sign up</Button>
              </Link>
              <Link to="/signin">
                <Button>Sign in</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger
            asChild
            className={cn("md:hidden", isDarkSection ? "text-white" : "text-gray-700")}>
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className={cn(
              "w-[80%] sm:w-[350px]",
              isDarkSection
                ? "bg-[#0A0B0D]/95 text-white border-gray-800"
                : "bg-white text-gray-900"
            )}>
            <div className="flex flex-col gap-6 pt-6">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.name}>
                    <HashLink
                      to={link.href}
                      smooth
                      className={cn(
                        "block py-2 text-base font-medium rounded-md transition-colors",
                        isDarkSection ? "hover:bg-gray-800/30" : "hover:bg-gray-100/30",
                        currentSection === link.href.substring(2) && "text-blue-500"
                      )}>
                      {link.name}
                    </HashLink>
                  </SheetClose>
                ))}
              </div>

              <div className="flex flex-col gap-3 pt-4">
                {userEmail ? (
                  <>
                    <SheetClose asChild>
                      <Link to="/settings">
                        <Button className="w-full" variant="default">
                          My account
                        </Button>
                      </Link>
                    </SheetClose>
                    <Button
                      className="w-full bg-transparent"
                      variant="outline"
                      onClick={() => {
                        dispatch(logoutUser())
                      }}>
                      Sign out
                    </Button>
                  </>
                ) : (
                  <>
                    <SheetClose asChild>
                      <Link to="/signup">
                        <Button
                          variant="outline"
                          className={cn("w-full", isDarkSection ? "bg-transparent" : "")}>
                          Sign up
                        </Button>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/signin">
                        <Button className="w-full">Sign in</Button>
                      </Link>
                    </SheetClose>
                  </>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default AppBar
