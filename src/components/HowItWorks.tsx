import React from "react";
import { ArrowRight } from "lucide-react";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "We assess your property and discuss your specific needs and requirements.",
    },
    {
      number: "02",
      title: "Customized Solution",
      description:
        "Our team designs a tailored WiFi solution perfect for your building layout and user demands.",
    },
    {
      number: "03",
      title: "Installation",
      description:
        "Professional installation with minimal disruption to your residents or operations.",
    },
    {
      number: "04",
      title: "Management Setup",
      description:
        "We configure the management platform and payment system to your specifications.",
    },
    {
      number: "05",
      title: "Ongoing Support",
      description:
        "Continuous technical support and regular updates to keep everything running smoothly.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-blue-800 mb-8">
              Our streamlined process ensures a smooth implementation from
              consultation to ongoing support.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex">
                  <div className="mr-6">
                    <div className="bg-blue-100 text-blue-600 font-bold w-12 h-12 rounded-full flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-blue-800">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                Get started with us
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>

          <div className="md:w-1/2">
            <img
              src="https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Technician installing WiFi equipment"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
