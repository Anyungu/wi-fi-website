import React from "react";
import { Check, Wifi, Users, Building } from "lucide-react";

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Basic",
      icon: <Wifi className="w-8 h-8 text-[#F7AB0A]" />,
      price: "2,999",
      description: "Perfect for small apartments",
      features: [
        "Up to 10Mbps speed",
        "Basic management dashboard",
        "Email support",
        "Up to 20 concurrent users",
        "Basic usage analytics",
      ],
    },
    {
      name: "Professional",
      icon: <Building className="w-8 h-8 text-[#F7AB0A]" />,
      price: "4,999",
      description: "Ideal for medium-sized properties",
      features: [
        "Up to 50Mbps speed",
        "Advanced management tools",
        "Priority support",
        "Up to 50 concurrent users",
        "Detailed analytics",
        "Custom billing options",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      icon: <Users className="w-8 h-8 text-[#F7AB0A]" />,
      price: "9,999",
      description: "For large properties & resellers",
      features: [
        "Up to 100Mbps speed",
        "Full reseller platform",
        "24/7 dedicated support",
        "Unlimited users",
        "Advanced analytics & reporting",
        "Custom branding",
        "API access",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your property or reselling business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-800 rounded-xl p-8 shadow-xl transition-transform duration-300 hover:transform hover:-translate-y-2 ${
                plan.popular ? "border-2 border-[#F7AB0A]" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#F7AB0A] text-gray-900 text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center justify-center mb-4">
                {plan.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-100 text-center mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-400 text-center mb-6">
                {plan.description}
              </p>

              <div className="text-center mb-6">
                <span className="text-gray-400">KES</span>
                <span className="text-4xl font-bold text-gray-100 mx-2">
                  {plan.price}
                </span>
                <span className="text-gray-400">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-300"
                  >
                    <Check size={20} className="text-[#F7AB0A] mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 px-6 rounded-lg transition-colors duration-300 ${
                  plan.popular
                    ? "bg-[#F7AB0A] text-gray-900 hover:bg-[#F7AB0A]/90"
                    : "bg-gray-700 text-gray-100 hover:bg-gray-600"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
