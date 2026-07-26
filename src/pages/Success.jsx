import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';

const Success = () => {
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <Confetti width={dimensions.width} height={dimensions.height} numberOfPieces={200} />
      <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Welcome to Pro!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Your subscription is active. Enjoy all premium features.
      </p>
      <Link
        to="/dashboard"
        className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        Go to Dashboard
      </Link>
    </div>
  );
};

export default Success;
