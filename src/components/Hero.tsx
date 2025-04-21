import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 leading-tight mb-4 animate-fade-in">
              Reliable WiFi Solutions for{" "}
              <span className="text-[#F7AB0A]">Apartments</span> &{" "}
              <span className="text-[#F7AB0A]">Resellers</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in-delayed">
              High-speed internet connectivity and cutting-edge management
              solutions for property owners and WiFi resellers across Kenya.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-delayed-more">
              <a
                href="#contact"
                className="px-8 py-3 bg-[#F7AB0A] text-gray-900 font-medium rounded-lg hover:bg-[#F7AB0A]/90 transition-colors duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a
                href="#pricing"
                className="px-8 py-3 border-2 border-[#F7AB0A] text-[#F7AB0A] font-medium rounded-lg hover:bg-[#F7AB0A]/10 transition-colors duration-300 flex items-center justify-center"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
