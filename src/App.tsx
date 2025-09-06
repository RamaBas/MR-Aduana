import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import References from "./components/References";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import FaqAccordion from "./components/FaqAccordion";
import AboutUsSection from "./components/About";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero isVisible={isVisible} />
      <AboutUsSection />
      <Services />
      <References />
      <FaqAccordion />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
