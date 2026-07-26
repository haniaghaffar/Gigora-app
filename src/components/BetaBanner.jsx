import React from 'react';

const BetaBanner = () => (
  <div className="w-full bg-yellow-100 text-yellow-800 py-2 text-center text-sm font-medium">
    We are in beta – <a href="/signup" className="underline hover:text-yellow-900">join free</a> and get <span className="font-bold text-green-700">Pro</span> access!
  </div>
);

export default BetaBanner;
