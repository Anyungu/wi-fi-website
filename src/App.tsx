import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { trackPageView, initGA } from "./utils/analytics";
import Services from "./components/Services";
import Features from "./components/Features";
import Pricing from "./components/Pricing";

function App() {
  useEffect(() => {
    // Initialize analytics
    initGA("UA-XXXXXXXX-X"); // Replace with actual GA tracking ID in production

    // Track initial page view
    trackPageView(window.location.pathname);

    // // Track page views when route changes
    // const handleRouteChange = () => {
    //   trackPageView(window.location.pathname);
    // };

    // Update document title and meta description for SEO
    document.title =
      "ApartmentNet | WiFi Solutions for Apartments and Resellers in Kenya";

    // Create meta description tag if it doesn't exist
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    // Set meta description content
    metaDescription.setAttribute(
      "content",
      "ApartmentNet provides reliable WiFi solutions for apartments and comprehensive management tools for WiFi resellers across Kenya. Get high-speed internet and powerful management solutions."
    );

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="font-sans w-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Features />
        <Pricing />
        <HowItWorks />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="254792891364" />
    </div>
  );
}

export default App;
