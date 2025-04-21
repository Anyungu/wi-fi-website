import React from "react";
import { Shield, Zap, BarChart, Coins, Clock, Smartphone } from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-10 h-10 text-blue-600" />,
      title: "High-Speed Connectivity",
      description:
        "Reliable, fast internet access for all residents with speeds up to 100Mbps.",
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      title: "Secure Network",
      description:
        "Advanced security protocols to keep user data and network traffic safe.",
    },
    {
      icon: <BarChart className="w-10 h-10 text-blue-600" />,
      title: "Usage Analytics",
      description:
        "Detailed insights into network performance and user consumption patterns.",
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-600" />,
      title: "24/7 Support",
      description:
        "Round-the-clock technical support for both property managers and end users.",
    },
    {
      icon: <Coins className="w-10 h-10 text-blue-600" />,
      title: "Flexible Billing",
      description:
        "Various pricing models to suit different property needs and resident preferences.",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-blue-600" />,
      title: "Mobile Management",
      description:
        "Control your network and view analytics from anywhere using our mobile app.",
    },
  ];

  return (
    <section
      id="features"
      className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Our WiFi solutions come equipped with everything you need to provide
            excellent service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 h-full"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="opacity-90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
