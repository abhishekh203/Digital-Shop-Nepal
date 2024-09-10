import React from 'react';
import { Button } from '@mui/material';

const ContactUs = () => {
  return (
    <div className="bg-[#f2b8a6] p-8 md:p-12 lg:p-16 rounded-lg text-center shadow-lg w-full mx-auto">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Contact Us</h2>
      <p className="text-lg text-gray-700 mb-8">
        Questions, Concerns, Comments? You tell us. We listen.
      </p>

      <div className="flex flex-col items-center mb-12">
        {/* Telegram Button */}
        <Button
          variant="contained"
          href="https://t.me/netflixnepalseller"
          sx={{
            mb: 3,
            backgroundColor: '#1976d2',
            width: '16rem',
            borderRadius: '30px',
            textTransform: 'none',
            fontWeight: 'bold',
            padding: '10px 0',
            '&:hover': { backgroundColor: '#135ba1' }
          }}
        >
          Message on Telegram
        </Button>
        <p className="text-sm text-gray-600 mb-4">For Technical Support</p>

        {/* WhatsApp Button */}
        <Button
          variant="contained"
          href="https://chat.whatsapp.com/IXl6YmkAZgEJkveJgbatAP"
          sx={{
            backgroundColor: '#388e3c',
            width: '16rem',
            borderRadius: '30px',
            textTransform: 'none',
            fontWeight: 'bold',
            padding: '10px 0',
            '&:hover': { backgroundColor: '#2e7d32' }
          }}
        >
          Joined on WhatsApp Group
        </Button>
        <p className="text-sm text-gray-600">For Checkout Assistance</p>
      </div>

      {/* Email, Telegram, and Instagram Section */}
      <div className="text-left md:text-center">
        <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
        <ul className="text-lg text-gray-700 space-y-2">
          <li>
            <strong>Email us:</strong> <a href="abhikapar10@gmail.com" className="text-blue-600 underline">abhikapar10@gmail.com</a>
          </li>
          <li>
            <strong>Telegram us:</strong> <a href="https://t.me/netflixnepalseller" className="text-blue-600 underline">@abhi203111</a>
          </li>
          <li>
            <strong>Instagram us:</strong> <a href="https://www.instagram.com/?next=%2F/premiumshopnepal_" className="text-pink-500 underline">@premium_Shop_Nepal</a>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-6">Need Us?</h3>
        <Button
          variant="contained"
          href="https://wa.me/9779807677391"
          sx={{
            backgroundColor: '#1976d2',
            width: '20rem',
            borderRadius: '30px',
            textTransform: 'none',
            fontWeight: 'bold',
            padding: '12px 0',
            '&:hover': { backgroundColor: '#135ba1' }
          }}
        >
          Queries/Replacement - Reach us on WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default ContactUs;
