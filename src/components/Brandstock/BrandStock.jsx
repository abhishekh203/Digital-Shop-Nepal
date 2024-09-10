import React from 'react';

const BrandsStock = () => {
  return (
    <div className="bg-[#F7B1A3] py-8 px-4">
      <div className="container mx-auto text-center">
        {/* Title Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-orange-600">Brands we stock</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Our rigorous selection process ensures that only the highest quality options are presented to you. 
          We understand that Security and Stability are non-negotiable.
        </p>
        
        {/* Brands Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-8">
          {/* Add brand logos with Tailwind classes */}
          <div className="flex justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="h-16" />
          </div>
          <div className="flex justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Disney%2B_Hotstar_logo.svg" alt="Disney+ Hotstar" className="h-16" />
          </div>
          <div className="flex justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube" className="h-16" />
          </div>
          <div className="flex justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt="Spotify" className="h-16" />
          </div>
          <div className="flex justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="h-16" />
          </div>
          <div className="flex justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png" alt="Prime Video" className="h-16" />
          </div>
        </div>

        {/* Features Section */}
        <div className="flex flex-col md:flex-row justify-around mt-8 space-y-6 md:space-y-0">
          {/* Free Worldwide Delivery */}
          <div className="flex flex-col items-center text-center">
            <span className="text-2xl mb-2">🌍</span>
            <p className="text-lg font-semibold">Free Worldwide Delivery</p>
            <p className="text-sm text-gray-700">Get Subscription via Email</p>
          </div>

          {/* 24/7 Support */}
          <div className="flex flex-col items-center text-center">
            <span className="text-2xl mb-2">💬</span>
            <p className="text-lg font-semibold">Get 24×7×365 Support</p>
            <p className="text-sm text-gray-700">Free Human Chat Support</p>
          </div>

          {/* Safe and Stable */}
          <div className="flex flex-col items-center text-center">
            <span className="text-2xl mb-2">🔒</span>
            <p className="text-lg font-semibold">Surely Safe and Stable</p>
            <p className="text-sm text-gray-700">Hassle-free Replacements</p>
          </div>

          {/* Secure Checkout */}
          <div className="flex flex-col items-center text-center">
            <span className="text-2xl mb-2">💳</span>
            <p className="text-lg font-semibold">100% Secure Checkout</p>
            <p className="text-sm text-gray-700">Esewa / Khalti / ImePsy /BankTransfer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsStock;
