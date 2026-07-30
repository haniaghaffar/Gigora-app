import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CreditCard,
  CalendarDays,
  BadgeCheck,
  CircleDollarSign,
} from "lucide-react";
import toast from "react-hot-toast";

const Billing = () => {
  const [cancelled, setCancelled] = useState(false);

  const billingInfo = {
    plan: "Pro",
    price: "$29/month",
    date: "15 August 2026",
    payment: "Visa •••• 4242",
  };

  const handleCancelSubscription = () => {
    if (cancelled) return;

    setCancelled(true);

    toast.success("Subscription cancelled successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-8 sm:py-12 px-4">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-extrabold text-primaryBlue text-center mb-3">
          Billing
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Manage your subscription and billing information.
        </p>


        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">

          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-3">
              <CircleDollarSign className="text-primaryBlue" />
              <span className="font-semibold">
                Current Plan
              </span>
            </div>

            <span className="px-4 py-1 rounded-full bg-amber-100 text-amber-700 font-semibold">
              {billingInfo.plan}
            </span>
          </div>


          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-3">
              <CircleDollarSign className="text-primaryBlue" />
              <span className="font-semibold">
                Monthly Price
              </span>
            </div>

            <span className="font-bold">
              {billingInfo.price}
            </span>
          </div>


          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-3">
              <CalendarDays className="text-primaryBlue" />
              <span className="font-semibold">
                Next Billing Date
              </span>
            </div>

            <span>
              {billingInfo.date}
            </span>
          </div>


          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-3">
              <BadgeCheck className="text-primaryBlue" />
              <span className="font-semibold">
                Subscription Status
              </span>
            </div>

            <span
              className={`font-semibold ${
                cancelled
                  ? "text-red-500"
                  : "text-green-600"
              }`}
            >
              {cancelled ? "Cancelled" : "Active"}
            </span>
          </div>


          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CreditCard className="text-primaryBlue" />
              <span className="font-semibold">
                Payment Method
              </span>
            </div>

            <span>
              {billingInfo.payment}
            </span>
          </div>


          <div className="pt-8 flex flex-col md:flex-row gap-4">

            <button
              onClick={handleCancelSubscription}
              disabled={cancelled}
              className={`flex-1 py-3 rounded-xl text-white font-semibold transition ${
                cancelled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600"
              }`}
            >
              {cancelled
                ? "Subscription Cancelled"
                : "Cancel Subscription"}
            </button>


            <Link
              to="/pricing"
              className="flex-1 py-3 rounded-xl bg-primaryBlue hover:bg-darkNavy text-white text-center font-semibold transition"
            >
              Change Plan
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Billing;