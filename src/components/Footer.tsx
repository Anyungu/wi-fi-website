import React from 'react';
import { Wifi, Facebook, Twitter, Instagram, Linkedin as LinkedIn } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <div className="flex items-center mb-4">
              <Wifi size={32} className="text-blue-300 mr-2" />
              <span className="text-2xl font-bold">ApartmentNet</span>
            </div>
            <p className="text-blue-200 mb-4 max-w-md">
              Providing reliable WiFi solutions for apartments and comprehensive management tools for resellers across Kenya.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                <Facebook />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                <Twitter />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                <Instagram />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                <LinkedIn />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3">
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-blue-200 hover:text-white transition-colors duration-300">Apartment WiFi</a></li>
                <li><a href="#services" className="text-blue-200 hover:text-white transition-colors duration-300">Reseller Platform</a></li>
                <li><a href="#services" className="text-blue-200 hover:text-white transition-colors duration-300">Payment Solutions</a></li>
                <li><a href="#services" className="text-blue-200 hover:text-white transition-colors duration-300">Network Management</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">FAQ</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Support</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Terms of Service</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-blue-200">+254 712 345 678</li>
                <li className="text-blue-200">info@apartmentnet.co.ke</li>
                <li className="text-blue-200">Westlands Business Park</li>
                <li className="text-blue-200">Nairobi, Kenya</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-6 mt-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-300">
              &copy; {new Date().getFullYear()} ApartmentNet. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-blue-300 hover:text-white transition-colors duration-300 mx-2">Privacy Policy</a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors duration-300 mx-2">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;