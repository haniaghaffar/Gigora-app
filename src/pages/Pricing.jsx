import React from "react";
import { toast } from "react-hot-toast";
import { subscribePlan } from "../services/api";
import {
  Check,
  CheckCircle2,
  XCircle,
  Sparkles,
  BrainCircuit,
  Download,
  ShieldCheck,
  Zap,
} from "lucide-react";

const Pricing = () => {
  const handleUpgrade = async () => {
    toast.success("Subscribing to Pro plan...");
    try {
      await subscribePlan('pro');
      toast.success("Subscription successful! Redirecting...");
      setTimeout(() => {
        window.location.assign("/checkout/success");
      }, 800);
    } catch (error) {
      console.error(error);
      toast.error("Subscription failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-14 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}

        <h1 className="text-5xl font-extrabold text-center text-primaryBlue">
          Choose Your Plan
        </h1>

        <p className="text-center text-gray-600 mt-4 mb-12 max-w-2xl mx-auto">
          Unlock AI-powered tools to generate proposals, optimize gigs,
          compare AI models, and grow your freelance business.
        </p>

        {/* Pricing Cards */}

        <div className="grid md:grid-cols-2 gap-8">
          {/* Free */}

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-darkNavy mb-3">Free</h2>

            <p className="text-5xl font-extrabold text-primaryBlue mb-6">
              $0
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Check size={18} className="text-green-600" />
                5 AI generations per day
              </li>

              <li className="flex items-center gap-3">
                <Check size={18} className="text-green-600" />
                Basic Proposal Generator
              </li>

              <li className="flex items-center gap-3">
                <Check size={18} className="text-green-600" />
                Basic SEO Suggestions
              </li>

              <li className="flex items-center gap-3">
                <Check size={18} className="text-green-600" />
                Community Support
              </li>
            </ul>

            <button
              onClick={() =>
                toast.success("You're already using the Free plan.")
              }
              className="w-full mt-8 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 font-semibold transition"
            >
              Current Plan
            </button>
          </div>

          {/* Pro */}

          <div className="relative bg-white rounded-2xl shadow-xl border-2 border-primaryBlue p-8">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primaryBlue text-white px-5 py-1 rounded-full text-sm font-semibold shadow">
              Recommended
            </div>

            <h2 className="text-2xl font-bold text-primaryBlue mb-3">Pro</h2>

            <p className="text-5xl font-extrabold text-primaryBlue mb-6">
              $9.99
              <span className="text-base font-medium"> /month</span>
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Check size={18} className="text-green-600" />
                Unlimited AI Generations
              </li>

              <li className="flex items-center gap-3">
                <BrainCircuit size={18} className="text-green-600" />
                AI Model Comparison
              </li>

              <li className="flex items-center gap-3">
                <Download size={18} className="text-green-600" />
                Proposal Downloads
              </li>

              <li className="flex items-center gap-3">
                <Sparkles size={18} className="text-green-600" />
                Bulk SEO Optimization
              </li>

              <li className="flex items-center gap-3">
                <Zap size={18} className="text-green-600" />
                Priority AI Processing
              </li>

              <li className="flex items-center gap-3">
                <ShieldCheck size={18} className="text-green-600" />
                Premium Support
              </li>
            </ul>

            <button
              onClick={handleUpgrade}
              className="w-full mt-8 py-3 rounded-xl bg-primaryBlue text-white hover:bg-darkNavy transition font-semibold"
            >
              Upgrade to Pro
            </button>

            <p className="text-center text-xs text-gray-500 mt-4">
              Demo checkout flow for frontend preview.
            </p>
          </div>
        </div>

        {/* Feature Comparison */}

        <div className="bg-white rounded-2xl shadow-lg mt-16 overflow-hidden">
          <h2 className="text-2xl font-bold text-center py-6">
            Feature Comparison
          </h2>

          <table className="w-full text-center">
            <thead className="bg-primaryBlue text-white">
              <tr>
                <th className="py-4">Feature</th>
                <th>Free</th>
                <th>Pro</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="py-4">AI Generations</td>
                <td>5/day</td>
                <td>Unlimited</td>
              </tr>

              <tr className="border-b">
                <td className="py-4">AI Model Comparison</td>
                <td>
                  <XCircle className="mx-auto text-red-500" size={18} />
                </td>
                <td>
                  <CheckCircle2
                    className="mx-auto text-green-600"
                    size={18}
                  />
                </td>
              </tr>

              <tr className="border-b">
                <td className="py-4">Proposal Downloads</td>
                <td>
                  <XCircle className="mx-auto text-red-500" size={18} />
                </td>
                <td>
                  <CheckCircle2
                    className="mx-auto text-green-600"
                    size={18}
                  />
                </td>
              </tr>

              <tr className="border-b">
                <td className="py-4">Bulk SEO</td>
                <td>
                  <XCircle className="mx-auto text-red-500" size={18} />
                </td>
                <td>
                  <CheckCircle2
                    className="mx-auto text-green-600"
                    size={18}
                  />
                </td>
              </tr>

              <tr>
                <td className="py-4">Priority Support</td>
                <td>
                  <XCircle className="mx-auto text-red-500" size={18} />
                </td>
                <td>
                  <CheckCircle2
                    className="mx-auto text-green-600"
                    size={18}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* FAQ */}

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-5">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold">
                Can I cancel my subscription anytime?
              </h3>

              <p className="text-gray-600 mt-2">
                Yes. You can cancel your Pro subscription whenever you want.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold">
                Is payment secure?
              </h3>

              <p className="text-gray-600 mt-2">
                Stripe integration will securely process all payments once the
                backend is connected.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold">
                What do I get with Pro?
              </h3>

              <p className="text-gray-600 mt-2">
                Unlimited AI usage, AI Model Comparison, Proposal Downloads,
                Bulk SEO Optimization, and Priority Support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;