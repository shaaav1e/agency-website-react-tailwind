import React, { useState, useEffect } from "react";

const WhatsAppButton = ({
  phoneNumber = "+923360018100",
  message = "Hello! I'm interested in your services.",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Format the WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-24 right-8 z-50 p-3 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-opacity duration-300 hover:scale-110 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Contact us on WhatsApp"
    >
      <i className="ri-whatsapp-line text-xl"></i>
      <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-white text-green-600 px-3 py-1 rounded-lg text-sm font-medium shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
