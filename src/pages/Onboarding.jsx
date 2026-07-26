import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Welcome to Gigora',
    description: 'You’re now part of the Gigora community. Let’s get you started with AI-powered freelance tools.',
    cta: 'Next',
  },
  {
    id: 2,
    title: 'Choose Your Platform',
    description: 'Select where you want to use Gigora – Fiverr, Upwork, or other platforms. This helps us tailor the experience.',
    cta: 'Next',
  },
  {
    id: 3,
    title: 'Generate Your First Proposal',
    description: 'We’ll walk you through creating a proposal with AI. Click Finish to go to your dashboard.',
    cta: 'Finish',
  },
];

const Onboarding = () => {
  const [current, setCurrent] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    if (current < steps.length) {
      setCurrent(current + 1);
    } else {
      // onboarding complete – go to dashboard
      navigate('/dashboard');
    }
  };

  const step = steps.find((s) => s.id === current);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-primaryBlue mb-4 text-center">{step.title}</h2>
        <p className="text-gray-700 mb-6 text-center">{step.description}</p>

        {/* Simple indicator */}
        <div className="flex justify-center gap-2 mb-6">
          {steps.map((s) => (
            <div
              key={s.id}
              className={`w-3 h-3 rounded-full ${s.id === current ? 'bg-primaryBlue' : 'bg-gray-300'}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primaryBlue text-white rounded-full hover:bg-darkNavy transition"
        >
          {step.cta}
          {step.id < steps.length ? <ArrowRight size={16} /> : <Check size={16} />}
        </button>

        {current === 1 && (
          <div className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-primaryBlue hover:underline">
              Log in
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
