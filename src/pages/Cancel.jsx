import React from "react";
import { Link } from "react-router-dom";
import { XCircle, ArrowLeft, Home } from "lucide-react";

const Cancel = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 px-4">

      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center">

        <XCircle
          size={70}
          className="mx-auto text-red-500 mb-5"
        />

        <h1 className="text-3xl font-bold text-gray-800">
          Payment Cancelled
        </h1>

        <p className="text-gray-600 mt-4 leading-7">
          Your payment was cancelled before it was completed.
          No charges have been made to your account.
        </p>

        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mt-8">
          <p className="text-red-700 text-sm">
            Your subscription is still on the <strong>Free Plan</strong>.
            Complete the payment anytime to unlock all Pro features.
          </p>
        </div>

        <div className="mt-8 space-y-3">

          <Link
            to="/checkout"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primaryBlue hover:bg-darkNavy text-white font-semibold transition"
          >
            <ArrowLeft size={18} />
            Try Again
          </Link>

          <Link
            to="/dashboard"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gray-200 hover:bg-gray-300 font-semibold transition"
          >
            <Home size={18} />
            Back to Dashboard
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Cancel;