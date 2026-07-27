import React from 'react';
import API from '../services/api';
import toast from 'react-hot-toast';

const Pricing = () => {
  const handleUpgrade = async () => {
    const loading = toast.loading('Initiating checkout...');
    try {
      const { data } = await API.post('/checkout/create', { plan: 'pro' });
      if (data && data.url) {
        toast.success('Redirecting to checkout', { id: loading });
        window.location.href = data.url;
      } else {
        console.error('Invalid checkout response', data);
        toast.error('Unexpected checkout response, using demo flow.', { id: loading });
        window.location.href = 'https://checkout.stripe.com/pay/cdemo_checkout';
      }
    } catch (err) {
      console.error('Checkout error', err);
      toast.error('An error occurred while initiating checkout.', { id: loading });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex flex-col items-center py-12 px-4">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-primaryBlue mb-4">
        Pricing Plans
      </h1>
      <p className="text-lg text-graySub max-w-2xl text-center mb-8">
        Choose the plan that fits your freelance business. Upgrade anytime to unlock premium AI tools.
      </p>

      {/* Cards */}
      <div className="grid gap-8 w-full max-w-4xl md:grid-cols-2">
        {/* Free Plan */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-darkNavy mb-2">Free</h2>
          <p className="text-5xl font-extrabold text-primaryBlue mb-4">$0</p>
          <ul className="text-left space-y-2 mb-6">
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔️</span>Limited AI generations
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔️</span>Basic analytics
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔️</span>Community support
            </li>
          </ul>
          <button
            onClick={() => toast.success('You are already on the free plan!')}
            className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition"
          >
            Current Plan
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center border-2 border-primaryBlue">
          <h2 className="text-2xl font-bold text-primaryBlue mb-2">Pro</h2>
          <p className="text-5xl font-extrabold text-primaryBlue mb-4">$9.99<span className="text-sm font-normal">/mo</span></p>
          <ul className="text-left space-y-2 mb-6">
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔️</span>Unlimited AI generations
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔️</span>Priority AI processing
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✔️</span>Advanced SEO & proposals
            </li>
          </ul>
          <button
            onClick={handleUpgrade}
            className="w-full px-4 py-2 bg-primaryBlue text-white rounded-full hover:bg-darkNavy transition"
          >
            Upgrade to Pro
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default Pricing;