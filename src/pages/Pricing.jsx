import React from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

const Pricing = () => {
  const navigate = useNavigate();

  const handleUpgrade = async () => {
    try {
      // Call backend to create Stripe Checkout session
      const { data } = await API.post('/checkout/create', { plan: 'pro' });
      // Expect backend returns { url: 'https://checkout.stripe.com/...'}
      if (data && data.url) {
        window.location.href = data.url; // redirect to Stripe Checkout
      } else {
        console.error('Invalid checkout response', data);
        alert('Failed to start checkout process. Please try again later.');
      }
    } catch (error) {
      console.error('Checkout error', error);
      alert('An error occurred while initiating checkout.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Upgrade to Pro</h1>
      <p className="text-lg mb-8 text-gray-700 max-w-xl text-center">
        Unlock premium features, priority support, and early access to new tools.
      </p>
      <button
        onClick={handleUpgrade}
        className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105"
      >
        Upgrade to Pro – $9.99/mo
      </button>
    </div>
  );
};

export default Pricing;
