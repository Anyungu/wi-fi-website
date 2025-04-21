import React from "react";
import { Wifi, Home, Users, CreditCard } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: <Wifi size={36} className="text-blue-600 mb-4" />,
      title: "Apartment WiFi",
      description:
        "High-speed internet solutions specifically designed for apartment buildings and residential complexes in Kenya.",
    },
    {
      icon: <Home size={36} className="text-blue-600 mb-4" />,
      title: "Building-Wide Coverage",
      description:
        "Full coverage solutions that ensure every corner of your property has strong, reliable WiFi signal.",
    },
    {
      icon: <Users size={36} className="text-blue-600 mb-4" />,
      title: "Reseller Platform",
      description:
        "Comprehensive management system for WiFi resellers looking to expand their business with minimal overhead.",
    },
    {
      icon: <CreditCard size={36} className="text-blue-600 mb-4" />,
      title: "Payment Solutions",
      description:
        "Integrated payment processing that makes it easy to collect revenue from subscribers with multiple payment options.",
    },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-blue-800 max-w-2xl mx-auto">
            We provide complete WiFi solutions for apartment buildings and
            powerful tools for WiFi resellers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-1"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {service.title}
              </h3>
              <p className="text-blue-800">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
