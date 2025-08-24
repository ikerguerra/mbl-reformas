'use client';

import React from 'react';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WhatsAppButton = () => {
  const phoneNumber = '34684675898'; // Replace with your actual phone number
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat on WhatsApp"
    >
      
      <FontAwesomeIcon icon={faWhatsapp} size="3x" />
      <style jsx>{`
        .whatsapp-button {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background-color: #25D366;
          color: white;
          border-radius: 50%;
          width: 80px;
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
          z-index: 1000;
        }

        .whatsapp-button:hover {
          transform: scale(1.1);
          color: white;
        }
      `}</style>
    </a>
  );
};

export default WhatsAppButton;
