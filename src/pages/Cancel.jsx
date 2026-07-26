import React from 'react';
import { Link } from 'react-router-dom';

const Cancel = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Payment Cancelled</h1>
      <p className="text-lg text-gray-700 mb-6">
        Your checkout was not completed. You can try again or explore our free features.
      </p>
      <Link
        to="/pricing"
        className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        View Pricing
      </Link>
    </div>
  );
};

export default Cancel;
