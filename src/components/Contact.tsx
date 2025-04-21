import React, { useState } from "react";
import { Phone, Mail, Map, Send } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-blue-800 max-w-2xl mx-auto">
            Interested in our services? Contact us today to discuss how we can
            meet your WiFi needs.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 bg-blue-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="text-blue-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-blue-900">Phone</h4>
                  <p className="text-blue-800">+254 712 345 678</p>
                  <p className="text-sm text-blue-700 mt-1">
                    Available Monday-Friday, 8am-6pm EAT
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-blue-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-blue-900">Email</h4>
                  <p className="text-blue-800">info@apartmentnet.co.ke</p>
                  <p className="text-sm text-blue-700 mt-1">
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Map className="text-blue-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-blue-900">Office</h4>
                  <p className="text-blue-800">Westlands Business Park</p>
                  <p className="text-blue-800">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-blue-900 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-blue-900 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-blue-900 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Your phone (optional)"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-blue-900 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
              >
                Send Message
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
