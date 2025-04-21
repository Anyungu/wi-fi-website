import React from "react";
import {
  Wifi,
  Facebook,
  Twitter,
  Instagram,
  Linkedin as LinkedIn,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <div className="flex items-center mb-4">
              <Wifi size={32} className="text-[#F7AB0A] mr-2" />
              <span className="text-2xl font-bold text-gray-100">
                Emoh Links
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Providing reliable WiFi solutions for apartments and comprehensive
              management tools for resellers across Kenya.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#F7AB0A] transition-colors duration-300"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#F7AB0A] transition-colors duration-300"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#F7AB0A] transition-colors duration-300"
              >
                <Instagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#F7AB0A] transition-colors duration-300"
              >
                <LinkedIn />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-100">
                Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-[#F7AB0A] transition-colors duration-300"
                  >
                    Apartment WiFi
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-[#F7AB0A] transition-colors duration-300"
                  >
                    Reseller Platform
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-[#F7AB0A] transition-colors duration-300"
                  >
                    Payment Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-[#F7AB0A] transition-colors duration-300"
                  >
                    Network Management
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-100">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#F7AB0A] transition-colors duration-300"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#F7AB0A] transition-colors duration-300"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#F7AB0A] transition-colors duration-300"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#F7AB0A] transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-100">
                Contact
              </h3>
              <ul className="space-y-2">
                <li className="text-gray-400">+254 792 891 364</li>
                <li className="text-gray-400">emohlinksltd@gmail.com</li>
                <li className="text-gray-400">Ruaka Square</li>
                <li className="text-gray-400">Nairobi, Kenya</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Emoh Links. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-[#F7AB0A] transition-colors duration-300 mx-2"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#F7AB0A] transition-colors duration-300 mx-2"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
