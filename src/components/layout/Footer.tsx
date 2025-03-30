import { Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const navigate = useNavigate()

  return (
    <footer className="bg-[#0A0B0D] text-white py-12 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Best Report</h3>
            <p className="text-gray-400 mb-4">
              Revolutionizing construction site management with automated reporting and real-time
              monitoring capabilities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <HashLink
                  to="/"
                  smooth
                  className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/#download"
                  smooth
                  className="text-gray-400 hover:text-blue-400 transition-colors">
                  Download App
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/#features"
                  smooth
                  className="text-gray-400 hover:text-blue-400 transition-colors">
                  Features
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/#pricing"
                  smooth
                  className="text-gray-400 hover:text-blue-400 transition-colors">
                  Pricing
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/#testimonials"
                  smooth
                  className="text-gray-400 hover:text-blue-400 transition-colors">
                  Testimonials
                </HashLink>
              </li>
            </ul>{" "}
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  7 Bis Rue Tolstoi, 92130 Issy-les-Moulineaux, France
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-blue-400" />
                <span className="text-gray-400">+33 7 44 94 32 98</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-blue-400" />
                <a href="mailto:contact@bestreport.fr">
                  <span className="text-gray-400">contact@bestreport.fr</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Best Report. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              onClick={() => {
                navigate("/cgu")
              }}
              className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a
              onClick={() => {
                navigate("/cgv")
              }}
              className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
