import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // react-icons library install thakte hobe

const WhatsAppButton = () => {
  const phoneNumber = "8801645832896"; // Tomar phone number eikhane dao (with country code)
  const message = "Hello! I saw your portfolio and would like to connect."; // Default message

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip */}
      <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 origin-right bg-gray-800 text-white text-xs px-3 py-1 rounded-md whitespace-nowrap shadow-xl">
        Chat with me
      </span>

      {/* Icon */}
      <FaWhatsapp size={32} />
      
      {/* Ripple Animation Effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10"></span>
    </a>
  );
};

export default WhatsAppButton;