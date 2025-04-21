import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-blue-50 via-blue-100 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight mb-4 animate-fade-in">
              Reliable WiFi Solutions for{" "}
              <span className="text-blue-600">Apartments</span> &{" "}
              <span className="text-blue-600">Resellers</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-800 mb-8 leading-relaxed animate-fade-in-delayed">
              High-speed internet connectivity and cutting-edge management
              solutions for property owners and WiFi resellers across Kenya.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-delayed-more">
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a
                href="#services"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in">
            <img
              src="https://images.pexels.com/photos/3839649/pexels-photo-3839649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Apartment building with WiFi connectivity"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
