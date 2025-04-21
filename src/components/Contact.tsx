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
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Interested in our services? Contact us today to discuss how we can
            meet your WiFi needs.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 bg-gray-800 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-semibold text-gray-100 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="text-[#F7AB0A] mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-gray-100">Phone</h4>
                  <p className="text-gray-300">+254 792 891 364</p>
                  <p className="text-sm text-gray-400 mt-1">
                    Available Monday-Friday, 8am-6pm EAT
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-[#F7AB0A] mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-gray-100">Email</h4>
                  <p className="text-gray-300">emohlinksltd@gmail.com</p>
                  <p className="text-sm text-gray-400 mt-1">
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Map className="text-[#F7AB0A] mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-gray-100">Office</h4>
                  <p className="text-gray-300">Ruaka Square</p>
                  <p className="text-gray-300">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
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
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#F7AB0A] focus:border-transparent outline-none transition text-gray-100"
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1"
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
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#F7AB0A] focus:border-transparent outline-none transition text-gray-100"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#F7AB0A] focus:border-transparent outline-none transition text-gray-100"
                    placeholder="Your phone (optional)"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
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
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#F7AB0A] focus:border-transparent outline-none transition text-gray-100"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-[#F7AB0A] text-gray-900 font-medium rounded-lg hover:bg-[#F7AB0A]/90 transition-colors duration-300 flex items-center justify-center"
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
