import React from "react";
import { Star } from "lucide-react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "David Kamau",
      role: "Property Manager, Westlands Apartments",
      quote: `ApartmentNet transformed our building's internet services. Residents are thrilled with the reliable connection, and the management system makes billing a breeze.`,
      stars: 5,
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Sarah Ochieng",
      role: "WiFi Reseller, Mombasa",
      quote:
        "The reseller platform has allowed me to scale my business without the technical headaches. Their payment solutions integrate perfectly with local mobile money services.",
      stars: 5,
      image:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "James Mwangi",
      role: "Building Owner, Kileleshwa",
      quote: `Since installing ApartmentNet in our complex, we've seen a significant increase in tenant satisfaction. Their team provided excellent support throughout the entire process.`,
      stars: 4,
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-blue-800 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what some of our satisfied
            clients have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-blue-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-blue-700">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-500 fill-current"
                  />
                ))}
              </div>

              <p className="text-blue-800 italic flex-grow">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
