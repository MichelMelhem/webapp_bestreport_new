
import { Linkedin, Mail, Phone, MapPin } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/dist/client/router"
import Link from "next/link"

export default function Footer() {
  const router = useRouter()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0A0B0D] text-white py-12 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        {/* Desktop version */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Best Report</h3>
            <p className="text-gray-400">
              Revolutionizing construction site management with automated reporting and real-time
              monitoring capabilities.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-blue-400 p-0"
                asChild>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link
                href="/#download"
                scroll={true}
                className="text-gray-400 hover:text-blue-400 transition-colors">
                Download App
              </Link>
              <Link
                href="/#features"
                scroll={true}
                className="text-gray-400 hover:text-blue-400 transition-colors">
                Features
              </Link>
              <Link
                href="/#pricing"
                scroll={true}
                className="text-gray-400 hover:text-blue-400 transition-colors">
                Pricing
              </Link>
              <Link
                href="/#testimonials"
                scroll={true}
                className="text-gray-400 hover:text-blue-400 transition-colors">
                Testimonials
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 col-span-2">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  7 Bis Rue Tolstoi, 92130 Issy-les-Moulineaux, France
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-blue-400" />
                <span className="text-gray-400">+33 7 44 94 32 98</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-blue-400" />
                <Link
                  href="mailto:contact@bestreport.fr"
                  className="text-gray-400 hover:text-blue-400 transition-colors">
                  contact@bestreport.fr
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile and Tablet version with accordion */}
        <div className="lg:hidden space-y-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="company-info" className="border-gray-700">
              <AccordionTrigger className="text-lg font-medium py-4 text-white">
                Best Report
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 py-2">
                  <p className="text-gray-400">
                    Revolutionizing construction site management with automated reporting and
                    real-time monitoring capabilities.
                  </p>
                  <div className="flex space-x-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-400 hover:text-blue-400 p-0"
                      asChild>
                      <Link href="#" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="quick-links" className="border-gray-700">
              <AccordionTrigger className="text-lg font-medium py-4 text-white">
                Quick Links
              </AccordionTrigger>
              <AccordionContent>
                <nav className="flex flex-col space-y-3 py-2">
                  <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Home
                  </Link>
                  <Link
                    href="/#download"
                    scroll={true}
                    className="text-gray-400 hover:text-blue-400 transition-colors">
                    Download App
                  </Link>
                  <Link
                    href="/#features"
                    scroll={true}
                    className="text-gray-400 hover:text-blue-400 transition-colors">
                    Features
                  </Link>
                  <Link
                    href="/#pricing"
                    scroll={true}
                    className="text-gray-400 hover:text-blue-400 transition-colors">
                    Pricing
                  </Link>
                  <Link
                    href="/#testimonials"
                    scroll={true}
                    className="text-gray-400 hover:text-blue-400 transition-colors">
                    Testimonials
                  </Link>
                </nav>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="contact" className="border-gray-700">
              <AccordionTrigger className="text-lg font-medium py-4 text-white">
                Contact Us
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-4 py-2">
                  <li className="flex items-start">
                    <MapPin className="mr-3 h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-gray-400">
                      7 Bis Rue Tolstoi, 92130 Issy-les-Moulineaux, France
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="mr-3 h-5 w-5 text-blue-400" />
                    <span className="text-gray-400">+33 7 44 94 32 98</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="mr-3 h-5 w-5 text-blue-400" />
                    <Link
                      href="mailto:contact@bestreport.fr"
                      className="text-gray-400 hover:text-blue-400 transition-colors">
                      contact@bestreport.fr
                    </Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Best Report. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              onClick={() => {
                router.push("/terms-of-sale");
                window.scrollTo({ top: 0, behavior: 'smooth' })

              }}
              className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
              Terms of Sale
            </a>
            <a
              onClick={() => {
                router.push("/terms-of-service");
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer >
  )
}
